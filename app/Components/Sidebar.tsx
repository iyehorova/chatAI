'use client';
import { useRouter } from 'next/navigation';
import { ChatBubbleMainIcon } from '../UI/ChatBubbleMainIcon';
import { ChatList } from './ChatList';

export const Sidebar = () => {
  const chats = [
    'Henry Boyd',
    'Philip Tucker',
    'Christine Reid',
    'Jerry Guzman',
  ];

  const router = useRouter();

  //Todo: fetch chats from server
  
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="box-border flex w-1/5 flex-shrink-0 flex-col bg-white py-8 pl-6 pr-2">
      <div
        className="flex h-12 w-full cursor-pointer flex-row items-center"
        onClick={handleClick}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-black/75">
          <ChatBubbleMainIcon />
        </div>

        <div className="ml-2 text-2xl font-bold">QuickChat</div>
      </div>

      <div className="mt-8 flex h-auto flex-col overflow-y-auto overflow-x-hidden">
        <ChatList chats={chats} />
      </div>
    </div>
  );
};
