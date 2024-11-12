'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChatItem } from './ChatItem';
import { ChartItemNew } from './ChatItemNew';

type Props = {
  chats: string[];
};

export const ChatList = ({ chats }: Props) => {
  const [visibleChats, setVisibleChats] = useState<string[]>(chats);
  const router = useRouter();

  const removeChatItem = (chatName: string) => {
    //Todo: remove chat from server
    setVisibleChats(prevChatList =>
      prevChatList.filter(chat => chat !== chatName),
    );
  };
  
  const addChatItem = (newChatName: string) => {
    //Todo: add new chat on server
    setVisibleChats(prevChatList => [newChatName, ...prevChatList]);
    router.push(`/chat/${newChatName}`);
  };

  return (
    <>
      <ChartItemNew onAddChat={addChatItem} />
      <div className="mt-4 flex flex-col space-y-1 overflow-y-auto">
        {visibleChats.map(chatName => (
          <Link
            href={`/chat/${chatName}`}
            key={chatName}
            className="flex items-center"
          >
            <ChatItem chatName={chatName} onRemoveChatItem={removeChatItem} />
          </Link>
        ))}
      </div>
    </>
  );
};
