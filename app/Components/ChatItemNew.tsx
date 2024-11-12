'use client';
import { useState } from 'react';
import clsx from 'clsx';

import { ChatInput } from './ChatInput';
import { PencilIcon } from '../UI/PencilIcon';

type Props = {
  onAddChat: (newName: string) => void;
};

export const ChartItemNew = ({ onAddChat }: Props) => {
  const [createMode, setCreateMode] = useState(false);

  const handleClick = () => {
    setCreateMode(true);
  };

  const formAction = (formData: FormData) => {
    const chatName = formData.get('newChat')?.toString();

    if (chatName) {
      onAddChat(chatName);
      setCreateMode(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className={clsx(
          'group flex cursor-pointer flex-row items-center rounded-xl py-2 pl-2 text-primary/55 hover:bg-gray-100 hover:text-primary',
          { hidden: createMode },
        )}
        onClick={handleClick}
      >
        <div>Create new chat</div>
        
        <div className="ml-auto flex h-6 w-6 items-center justify-center rounded text-xs leading-none">
          <PencilIcon />
        </div>
      </div>

      {createMode && (
        <form action={formAction}>
          <ChatInput inputName="newChat" />
        </form>
      )}
    </div>
  );
};
