import React from "react";

export default function Loadding() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center space-x-2 bg-white dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 animate-bounce rounded-full bg-[#014AAd] [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 animate-bounce rounded-full bg-[#014AAd] [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 animate-bounce rounded-full bg-[#014AAd]"></div>
      </div>
    </div>
  );
}
