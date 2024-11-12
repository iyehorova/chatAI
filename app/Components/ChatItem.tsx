'use client';

import { XMarkIcon } from '../UI/XMarkIcon';

type Props = {
  chatName: string;
  onRemoveChatItem: (chatName: string) => void;
};

export const ChatItem = ({ chatName, onRemoveChatItem }: Props) => {
  const handleClick = () => {
    onRemoveChatItem(chatName);
  };

  return (
    <button className="group relative flex w-11/12 flex-row items-center rounded-xl py-2 hover:bg-gray-100">
      <div className="ml-2 break-words pr-12 text-left text-sm font-semibold">
        {chatName}
      </div>

      <div
        className="absolute right-2 ml-auto hidden h-4 w-4 items-center justify-center rounded text-xs leading-none text-primary group-hover:flex"
        onClick={handleClick}
      >
        <XMarkIcon />
      </div>
    </button>
  );
};
