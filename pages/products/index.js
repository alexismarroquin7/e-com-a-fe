import { useEffect, useState } from "react";
import * as ProductService from "../../services/products-services";
import * as InventoryService from "../../services/inventory-services";
import { ProductList } from "../../widgets";

export default function ShopPage () {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const products = await ProductService.findAll();
        setProductList(products);
      } catch (err) {
        console.log(err);
      }
    }
    
    fetchProducts();
  }, []);

  return (
  <div>
    
    <ProductList products={productList}/>
    
    <style jsx>{`
    
    `}</style>
  </div>  
  )
}