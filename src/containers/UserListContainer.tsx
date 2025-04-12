import React from "react";
import Divider from "../components/Divider";
import { motion, AnimatePresence } from "framer-motion";

export interface UserListItem {
  avatar?: string;
  name: string;
  username: string;
  rightContent?: React.ReactNode;
  onClick?: () => void;
}

interface UserListContainerProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  items: UserListItem[];
}

const gradients = [
  "from-[#FF6A5E] to-[#FFB86C]",
  "from-[#50A8EB] to-[#9EE3FF]",
  "from-[#A076F9] to-[#D5A3FF]",
  "from-[#29C780] to-[#A0F8C2]",
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
};

const UserListContainer: React.FC<UserListContainerProps> = ({
  searchValue,
  onSearchChange,
  items,
}) => {
  return (
    <div className="tw-container rounded-[20px] px-[15px] py-[15px] mx-[15px] flex flex-col gap-[10px]">
      {/* 🔍 Инпут вместо header */}
      <input
        type="text"
        placeholder="Введите имя или @username"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl outline-none mb-[5px]"
      />

      <div className="flex flex-col">
        <AnimatePresence>
          {items.map((item, index) => (
            <React.Fragment key={item.username}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between py-[10px] cursor-pointer"
                onClick={item.onClick}
              >
                <div className="flex items-center gap-[15px]">
                  {item.avatar && item.avatar.trim() !== "" ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-[45px] h-[45px] rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className={`w-[45px] h-[45px] rounded-full flex items-center justify-center text-white text-[16px] font-semibold font-sfpro bg-gradient-to-br ${
                        gradients[item.username.length % gradients.length]
                      }`}
                    >
                      {getInitials(item.name)}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[16px] font-sfpro font-medium text-[#212121]">
                      {item.name}
                    </span>
                    <span className="text-[15px] font-sfpro text-[#6D6D6D]">@{item.username}</span>
                  </div>
                </div>
                {item.rightContent}
              </motion.div>

              {/* Divider */}
              {index < items.length - 1 && (
                <div className="pl-[65px] mr-[-15px]">
                  <Divider />
                </div>
              )}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserListContainer;
