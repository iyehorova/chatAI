import { NewChatStart } from './Components/NewChatStart';

export default function Home() {
  return (
    <>
      <div className="flex h-full flex-auto flex-col items-center justify-center p-6">
        <p className="text-2xl font-semibold">
          What do you want to discuss now?
        </p>
        
        <NewChatStart />
      </div>
    </>
  );
}
