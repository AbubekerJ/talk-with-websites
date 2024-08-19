"use client";

import { useChat } from "ai/react";

const ChatWrapper = ({ sessionId }) => {
  const { messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat({
      api: "/api/chat",
      body: sessionId,
    });

  return (
    <div>
      {JSON.stringify(messages)}
      <form action="" onSubmit={handleSubmit}>
        <input
          className="bg-white w-80 text-black"
          value={input}
          onChange={handleInputChange}
        ></input>
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default ChatWrapper;
