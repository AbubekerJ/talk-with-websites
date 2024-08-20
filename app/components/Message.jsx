import React from "react";
import { cn } from "../lib/utils";
import { Bot } from "lucide-react";
import { User } from "lucide-react";

const Message = ({ content, isUser }) => {
  return (
    <div
      className={cn({
        "bg-zinc-800": isUser,
        "bg-zinc-900/25": !isUser,
      })}
    >
      <div className="p-4">
        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            className={
              (cn(
                "size-10 shrink-0 aspect-square border border-zinc-50 bg-zinc-900 flex justify-center items-center"
              ),
              { "bg-blue-300 border-blue-700 text-zinc-200": isUser })
            }
            
          >
            {isUser?<User className='size-5 text-white'/>:<Bot className="size-5 text-white"/>}
          </div>
          <div className="flex flex-col ml-6 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {isUser ? "You" : "Website"}
              </span>
            </div>

            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
