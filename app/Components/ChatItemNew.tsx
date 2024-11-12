'use client'
import { useState } from "react"
import clsx from 'clsx'
import { Input } from "../UI/Input"
import { PencilIcon } from "../UI/PencilIcon";


export const ChartItemNew = () => {
  const [createMode, setCreateMode] = useState(false);
  const handleClick = () => {
    setCreateMode(true);
  }
  return (
    <div  className="flex flex-col ">
      <div
        className={clsx("group flex flex-row items-center text-primary/55 hover:text-primary hover:bg-gray-100 rounded-xl p-2 cursor-pointer")}
        onClick={handleClick}
      >
        <div>

          Create new chat

        </div>
        <div
          className="flex items-center justify-center ml-auto text-xs  h-6 w-6 rounded leading-none"
        >
          <PencilIcon />
        </div>
      </div>
      {createMode && <Input />}
      {/* <div
        className="flex items-center justify-center h-5 w-5 text-primary/40" 
      >
        <ChatBubbleIcon  />
      </div>

      <div className="ml-2 text-sm font-semibold"></div>

      <div
        className="group-hover:flex items-center hidden justify-center ml-auto text-xs text-primary  h-4 w-4 rounded leading-none"
        onClick={handleClick}
      >
        <PencilIcon />
      </div> */}
    </div >
  )
}