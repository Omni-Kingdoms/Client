import ItemList from '@/components/Modal/ItemList/ItemList'

type EquipmentStoreProps = {
  close: () => void,
}

export default function EquipmentStore({ close }: EquipmentStoreProps) {
  return (
    <ItemList title="Equipments" close={close}> </ItemList>
  )
}