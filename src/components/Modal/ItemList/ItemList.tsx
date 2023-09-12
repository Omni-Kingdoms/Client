import "./index.css";
import Image from 'next/image';

import closeIcon from "@/assets/img/components/modal/X.png";
import textbook from "@/assets/img/components/ItemList/textbook.png";
import { ReactNode, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

type ItemListProps = {
  title: string,
  close: () => void,
  children: ReactNode,
  footer?: ReactNode,
  header?: ReactNode
}

export default function ItemList({ title, close, children, footer, header }: ItemListProps) {
  const itemListRef = useRef(null);

  useOnClickOutside(itemListRef, close);

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div ref={itemListRef} className="bg-list relative flex flex-col max-w-[480px] min-w-[340px]">
          <Image src={textbook} alt="Textbook background" className="invisible w-[100%]" />
          <div className="content absolute inset-0 py-12 px-16 flex flex-col max-[480px]:px-12 max-[480px]:py-8 max-[400px]:px-8">
            <button type="button" className="absolute top-4 right-16" onClick={close}>
              <Image src={closeIcon} alt="close icon" />
            </button>
            <h1 className="title text-2xl text-center">{title || 'Conteúdo'}</h1>
            {header}
            <div className="item-list flex-1 overflow-y-auto">{children}</div>
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}