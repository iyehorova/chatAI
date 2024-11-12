'use client';
import { MessageInput } from './MessageInput';

export const NewChatStart = () => {
  const handleSubmit = (newMessage: string) => {
    console.log(newMessage);
    //Todo: add new chat to server (create id on server side)
  };
  
  return <MessageInput onSubmit={handleSubmit} />;
};
