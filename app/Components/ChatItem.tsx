'use client'

import { ChatBubbleIcon } from "../UI/ChatBubbleIcon"
import { XMarkIcon } from "../UI/XMarkIcon"

type Props = {
  chatName: string;
  onRemoveChatItem: (chatName: string) => void;
}

export const ChatItem = ({ chatName, onRemoveChatItem }: Props) => {
  const handleClick = () => { 
    onRemoveChatItem(chatName);
  }
  return (
    <button
      className="group flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
    >
      <div
        className="flex items-center justify-center h-5 w-5 text-primary/40" 
      >
        <ChatBubbleIcon  />
      </div>

      <div className="ml-2 text-sm font-semibold">{chatName}</div>

      <div
        className="group-hover:flex items-center hidden justify-center ml-auto text-xs text-primary  h-4 w-4 rounded leading-none"
        onClick={handleClick}
      >
        <XMarkIcon />
      </div>
    </button>
  )
}