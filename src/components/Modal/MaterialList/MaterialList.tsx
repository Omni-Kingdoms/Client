import { Suspense, useRef } from 'react';
import Image from 'next/image'
import { useOnClickOutside } from 'usehooks-ts';

import paperback1 from "@/assets/img/components/Equipment/paperback1.png";
import closeIcon from "@/assets/img/components/modal/X.png";
import Loading from '@/app/loading';
import MaterialsGrid from './MaterialsGrid';

type MaterialListProps = {
  close: () => void,
}

export default function MaterialList({ close }: MaterialListProps) {
  const materialListRef = useRef(null);

  useOnClickOutside(materialListRef, close);

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div ref={materialListRef} className="bg-modal relative flex flex-col">
          <Image src={paperback1} width={1000} alt="Textbook background" className="invisible min-w-[420px] w-[100vw] max-w-[600px]" />
          <div className="content absolute inset-0 px-10 py-10 flex flex-col gap-4 p-[15%] min-[590px]:py-12 md:px-12 sm:gap-10">
            <button
              type="button"
              onClick={close}
              className="absolute top-[12%] right-[6%] z-20"
            >
              <Image src={closeIcon} alt="close icon" />
            </button>
            <div className="w-[100%] h-[100%] flex flex-col pt-3 gap-4 md:gap-4">
              <h2 className="title text-3xl text-center">Material List</h2>
              <Suspense fallback={<div className="flex-1 flex items-center justify-center"><Loading /></div>}>
                <MaterialsGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}