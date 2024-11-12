'use client';
import { SendIcon } from '../UI/SendIcon';

type Props = {
  onSubmit: (message: string) => void;
};

export const MessageInput = ({ onSubmit }: Props) => {
  const formAction = (formData: FormData) => {
    const message = formData.get('message');
    onSubmit(message as string);
  };

  return (
    <form
      action={formAction}
      className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4"
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            name="message"
            autoComplete="off"
            className="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none"
          />
        </div>
      </div>

      <div className="ml-4">
        <button className="flex flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-600">
          <span>Send</span>
          <span className="-mt-1 ml-2 h-4 w-4 -rotate-45 transform">
            <SendIcon />
          </span>
        </button>
      </div>
    </form>
  );
};
