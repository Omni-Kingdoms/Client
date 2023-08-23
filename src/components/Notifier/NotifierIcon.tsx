import Image from 'next/image';

import light from '@/assets/img/components/Play/light.png';
import { notifierStore } from '@/store/notifierStore';
import { useEffect } from 'react';

type NotifierIconProps = {
  text: string
}

export default function NotifierIcon({ text }: NotifierIconProps) {
  const setNotifierText = notifierStore((state) => state.setNotifierText);

  useEffect(() => {
    setNotifierText(text);
  })

  return (
    <div className="w-[100%] h-[100%]">
      <Image src={light} width={80} height={80} className="animate-pulse absolute top-[-5%] right-[-5%]" alt="light icon" />
    </div>
  )
}