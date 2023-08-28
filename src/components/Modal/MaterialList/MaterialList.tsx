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
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="fixed inset-0 backdrop-blur-sm">
        <div className="relative h-[100vh]">
          <div
            className="animate-transform bg-equip z-20 absolute flex flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] min-[1400px]:translate-y-[-50%]"
          >
            <Image
              src={paperback1}
              width={1000}
              alt="Main background"
              className="invisible min-w-[550px] max-w-[100vw]"
            />
            <div ref={materialListRef} className="content absolute inset-0 p-16 sm:p-20 md:p-24">
              <button
                type="button"
                className="absolute top-[9%] right-[7%] z-20"
                onClick={close}
              >
                <Image src={closeIcon} alt="close icon" />
              </button>
              <div className="w-[100%] h-[100%] flex flex-col pt-4">
                <h2 className="title text-3xl text-center">Material List</h2>
                <Suspense fallback={<div className="flex-1 flex items-center justify-center"><Loading /></div>}>
                  <MaterialsGrid />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}