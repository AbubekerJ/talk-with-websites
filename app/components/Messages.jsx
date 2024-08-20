import React from "react";
import Message from '@/app/components/Message'
import { MessageSquare } from "lucide-react";

const Messages = ({messages}) => {
  console.log(messages)
  const noMessages = !messages || messages.length === 0;

  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {!noMessages ? (
        messages.map((message , index) => < Message content={message.content}  key={index} isUser={message.role==='user'}/>)
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <MessageSquare className="size-8 text-blue-500" />
        <h3 className="font-semibold text-xl text-white">You are all set!</h3>
        <p className="text-zinc-500 text-sm">Ask your first question to get started.</p>
      </div>
      )}
    </div>
  );
};

export default Messages;
