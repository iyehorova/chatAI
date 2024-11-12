
import { ChatMessage } from '@/app/Components/ChatMessage';
import { MessageItem } from '@/app/Components/MessageItem';
import { Params } from 'next/dist/server/request/params';



export default async function ChatPage(props: { params: Promise<Params>}) {
  const params = await props.params;
  const { chatId } = params;
  console.log(chatId);
  const data = [
    { role: 'user', message: 'Hey How are you today?' },
    {
      role: 'chat',
      message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa commodi illum saepe numquam
    maxime asperiores voluptate sit, minima perspiciatis.`,
    },
    { role: 'user', message: 'I am ok what about you?' },
    {
      role: 'chat',
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing. ?',
    },
    { role: 'user', message: 'Lorem ipsum dolor sit amet !' },
    {
      role: 'chat',
      message:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.',
    },
  ];
  //Todo: fetch messages from server by chatId

  return (
    <div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
      <div className="mb-4 flex h-full flex-col overflow-x-auto">
        <div className="flex h-full flex-col">
          <div className="grid grid-cols-12 gap-y-2">
            {data.map(({ role, message }) => (
              <MessageItem role={role} message={message} key={message} />
            ))}
          </div>
        </div>
      </div>
      <ChatMessage chatId={chatId as string} />
    </div>
  );
}
