import ItemList from '@/components/Modal/ItemList/ItemList'

type EquipmentShopProps = {
  close: () => void,
}

export default function EquipmentShop({ close }: EquipmentShopProps) {
  return (
    <ItemList title="Equipments" close={close}> </ItemList>
  )
}