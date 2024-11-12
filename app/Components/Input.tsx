'use client';
import { useEffect, useRef } from 'react';
import { SubmitIcon } from '../UI/SubmitIcon';

type Props = {
  inputName: string;
};

export const Input = ({ inputName }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        name={inputName}
        type="text"
        className="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none"
      />
      <button className="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400 hover:text-gray-600">
        <SubmitIcon />
      </button>
    </div>
  );
};
