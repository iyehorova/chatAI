'use client'
import { useState } from "react";
import { ChatItem } from "./ChatItem";

type Props = {
  chats: string[];
}

export const ChatList = ({ chats }: Props) => {
  const [visibleChats, setVisibleChats] = useState<string[]>(chats);

  const removeChatItem = (chatName: string) => {
    setVisibleChats((prevChatList) => prevChatList.filter(chat => chat !== chatName));
  }

  return (
    <div className="flex flex-col space-y-1 mt-4 -mx-2  overflow-y-auto">
      {visibleChats.map(chatName => (
        <ChatItem chatName={chatName} onRemoveChatItem={removeChatItem} key={chatName} />
      ))}
    </div>
  )
}