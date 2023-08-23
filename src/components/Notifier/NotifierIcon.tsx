import Image from 'next/image';

import light from '@/assets/img/components/Play/light.png';
import { notifierStore } from '@/store/notifierStore';
import { useEffect } from 'react';

type NotifierIconProps = {
  text?: string,
  className?: string,
}

export default function NotifierIcon({ text, className }: NotifierIconProps) {
  const notifierText = notifierStore((state) => state.notifierText);
  const setNotifierText = notifierStore((state) => state.setNotifierText);

  useEffect(() => {
    if (notifierText || !text) return;

    setNotifierText(text);
  }, [setNotifierText, text])

  return (
    <Image src={light} width={70} height={70} className={`animate-pulse pointer-events-none absolute top-0 right-0${className ? ` ${className}` : ''}`} alt="light icon" />
  )
}