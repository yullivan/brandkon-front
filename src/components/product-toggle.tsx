'use client';

import { useState } from 'react';

export default function ProductToggle({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [isClose, setIsClose] = useState(true);
  return (
    <div>
      <button
        onClick={() => setIsClose(!isClose)}
        className="flex w-full justify-between"
      >
        <div>{title}</div>
        <div>{isClose ? '⬇️' : '⬆️'}</div>
      </button>
      {isClose ? null : <div>{content}</div>}
    </div>
  );
}
