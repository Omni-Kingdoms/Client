import ItemList from '@/components/Modal/ItemList/ItemList'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

type StoreProps = {
  close: () => void,
}

export default function Store({ close }: StoreProps) {
  return (
    <ItemList title="Store" close={close}> </ItemList>
  )
}