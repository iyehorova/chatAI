'use client';
import { useState } from 'react';
import { ChatItem } from './ChatItem';
import { ChartItemNew } from './ChatItemNew';

type Props = {
  chats: string[];
};

export const ChatList = ({ chats }: Props) => {
  const [visibleChats, setVisibleChats] = useState<string[]>(chats);

  const removeChatItem = (chatName: string) => {
    setVisibleChats(prevChatList =>
      prevChatList.filter(chat => chat !== chatName),
    );
  };
  const addChatItem = (newChatName: string) => { 
    setVisibleChats((prevChatList) => [newChatName, ...prevChatList]);
  }

  return (
    <>
      <ChartItemNew onAddChat={addChatItem} />
      <div className="-mx-2 mt-4 flex flex-col space-y-1 overflow-y-auto">
        {visibleChats.map(chatName => (
          <ChatItem
            chatName={chatName}
            onRemoveChatItem={removeChatItem}
            key={chatName}
          />
        ))}
      </div>
    </>
  );
};
