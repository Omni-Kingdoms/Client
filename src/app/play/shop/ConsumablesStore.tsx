import ItemList from '@/components/Modal/ItemList/ItemList'

type ConsumablesStoreProps = {
  close: () => void,
}

export default function ConsumablesStore({ close }: ConsumablesStoreProps) {
  return (
    <ItemList title="Consumables" close={close}> </ItemList>
  )
}