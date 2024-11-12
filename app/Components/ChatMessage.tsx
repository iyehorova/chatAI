'use client';
import { MessageInput } from './MessageInput';

type Props = {
  chatId: string;
};

export const ChatMessage = ({ chatId }: Props) => {
  const handleMessage = (message: string) => {
    //Todo: add new message to server to chat with id = params.chatId
    console.log(message, chatId);
  };
  
  return <MessageInput onSubmit={handleMessage} />;
};
