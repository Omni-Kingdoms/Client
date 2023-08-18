type LoadingProps = {
  color?: string
}

export default function Loading({ color }: LoadingProps) {
  const borderColor = color || '#643A30';

  return (
    <div className="flex items-center  justify-center text-center mx-auto  w-full ">
      <span className={`relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-[${borderColor}] after:border-x-transparent`}></span>
    </div>
  );
}
