import { InventoryItem } from "../InventoryItem";

export const InventoryList = ({inventory = []}) => {
  return <div>
    {inventory.length > 0 ? inventory.map(item => {
      return <InventoryItem
        key={item.sku}
        inventoryItem={item}
      />
    }) : ''}
    <style jsx>{`
      div {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }
    `}</style>
  </div>
}