const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const BOT_TOKEN = '6416571013:AAEMNzyrYJFTaWHGZpexDS3dEflEKpsgmfU';

const dbPath = path.join(__dirname, 'db.json');
const loadDb = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const saveDb = (db) => fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

app.use(cors());
app.use(bodyParser.json());

function checkTelegramInitData(initData) {
  const parsed = new URLSearchParams(initData);
  const hash = parsed.get('hash');
  const dataCheckArr = [];

  parsed.forEach((val, key) => {
    if (key !== 'hash') {
      dataCheckArr.push(`${key}=${val}`);
    }
  });

  dataCheckArr.sort();
  const dataCheckString = dataCheckArr.join('\n');

  const secretKey = crypto
    .createHmac('sha256', 'WebAppData')
    .update(BOT_TOKEN)
    .digest();

  const computedHash = crypto
    .createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex');

  return computedHash === hash;
}

app.post('/auth/telegram', (req, res) => {
  try {
    const { initData } = req.body;
    if (!initData) return res.status(400).json({ error: 'initData отсутствует' });
    if (!checkTelegramInitData(initData)) {
      return res.status(403).json({ error: 'Invalid initData' });
    }

    const parsed = new URLSearchParams(initData);
    const user = JSON.parse(parsed.get('user'));
    const userId = String(user.id);

    const db = loadDb();
    if (!db.users) db.users = {};

    // если юзера нет — добавляем с 0 бонусов
    if (!db.users[userId]) {
      db.users[userId] = {
        bonus: 0,
        first_name: user.first_name,
        username: user.username,
        photo_url: user.photo_url
      };
      saveDb(db);
    }

    res.json({
      user: {
        id: user.id,
        first_name: db.users[userId].first_name,
        username: db.users[userId].username,
        photo_url: db.users[userId].photo_url
      },
      bonus: db.users[userId].bonus
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal error' });
  }
});

app.post('/bonus/collect', (req, res) => {
  try {
    const { userId, amount } = req.body;
    const db = loadDb();

    if (!db.users[userId]) return res.status(404).json({ error: 'User not found' });

    db.users[userId].bonus += amount;
    saveDb(db);
    res.json({ bonus: db.users[userId].bonus });
  } catch {
    res.status(500).json({ error: 'Internal error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});





