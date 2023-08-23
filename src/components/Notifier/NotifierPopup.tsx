import "./index.css";

import { notifierStore } from '@/store/notifierStore'
import { useEffect } from 'react';

export default function NotifierPopup() {
  const notifierText = notifierStore((state) => state.notifierText);
  const setNotifierText = notifierStore((state) => state.setNotifierText);

  useEffect(() => {
    setTimeout(() => {
      setNotifierText('')
    }, 5000);
  });

  return (
    <div className="popup-container fixed bottom-[8%] left-[50%] translate-x-[-50%] w-[100%] max-w-[800px] m-auto flex flex-col text-center gap-4 p-2 animate-pulse">
      <h3 className="font-bold text-2xl">NOTICE</h3>
      <p>{notifierText}</p>
    </div>
  )
}