import clsx from 'clsx';
import { ChatBubbleIcon } from '../UI/ChatBubbleIcon';

type Props = {
  role: string;
  message: string;
};

export const MessageItem = ({ role, message }: Props) => {
  return (
    <div
      className={clsx(
        {
          'col-start-6 col-end-13': role === 'user',
          'col-start-1 col-end-8': role === 'chat',
        },
        'rounded-lg p-3',
      )}
    >
      <div
        className={clsx('flex items-center justify-start', {
          'flex-row-reverse': role === 'user',
        })}
      >
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/30 text-accent">
          {role === 'user' ? (
            <p>I</p>
          ) : (
            <p className="h-5 w-5">
              <ChatBubbleIcon />
            </p>
          )}
        </div>

        <div
          className={clsx('relative rounded-xl px-4 py-2 text-sm shadow', {
            'mr-3 bg-indigo-100': role === 'user',
            'ml-3 bg-white': role === 'chat',
          })}
        >
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};
