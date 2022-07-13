import { useEffect, useState } from "react";
import { InventoryList } from "../../widgets/InventoryList";
import * as InventoryService from "../../services/inventory-services"
export default function InventoryPage () {
  
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    
    const fetchInventory = async () => {
      try {
        const inventory = await InventoryService.findAll();
        setInventoryList(inventory);
        console.log(inventory);
      } catch (err) {
        console.log(err);
      }
    }

    fetchInventory();
  }, []);
  
  return <div className="inventory_page_wrapper">
    <InventoryList inventory={inventoryList}/>
    <style jsx>{`
      .inventory_page_wrapper {
        display: flex;
        width: 100%;
        flex-flow: column wrap;
        align-items: center;
        padding: 1rem 0;
      }
    `}</style>
  </div> 
}