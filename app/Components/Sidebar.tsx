import { ChatBubbleMainIcon } from "../UI/ChatBubbleMainIcon";
import { ChartItemNew } from "./ChatItemNew";
import { ChatList } from "./ChatList";

export const Sidebar = () => {
  const chats = ['Henry Boyd', 'Philip Tucker', 'Christine Reid', 'Jerry Guzman'];

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <div className="flex flex-row items-center  h-12 w-full">
        <div
          className="flex items-center justify-center rounded-2xl text-accent bg-indigo-100 h-10 w-10"
        >
          <ChatBubbleMainIcon /> 
        </div>
        <div className="ml-2 font-bold text-2xl">QuickChat</div>
      </div>
      
      <div className="flex flex-col mt-8">
        <ChartItemNew />
        <ChatList chats={ chats} />
      </div>
    </div>
  )
}