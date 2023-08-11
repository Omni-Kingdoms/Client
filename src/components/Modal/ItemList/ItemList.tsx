import "./index.css";
import Image from 'next/image';

import fechar from "@/assets/img/components/modal/X.png";
import textbook from "@/assets/img/components/ItemList/textbook.png";
import { ReactNode, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

type ItemListProps = {
  title: string,
  close: () => void,
  children: ReactNode
}

export default function ItemList({ title, close, children }: ItemListProps) {
  const itemListRef = useRef(null);

  useOnClickOutside(itemListRef, close);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm flex items-end justify-center">
        <div ref={itemListRef} className="bg-list relative flex flex-col">
          <Image src={textbook} alt="Textbook background" className="invisible" />
          <div className="content absolute inset-0 p-24 flex flex-col">
            <button type="button" className="absolute top-4 right-16" onClick={close}>
              <Image src={fechar} alt="Fechar lista" />
            </button>
            <h1 className="title text-2xl text-center">{title || 'Conteúdo'}</h1>
            <div className="item-list flex-1 overflow-y-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}