import { useRouter } from "next/router";

export const ProductItem = ({product}) => {
  console.table(product);
  const { brand, category, inventory, option_groups } = product;
  
  const router = useRouter();

  return (
  <div
    className="product_item_wrapper"
  >
    <h4>{brand.name}<br/>{product.name}</h4>
    
    <p>{category.name}</p>

    <p>${inventory[0].price}</p>
    
    <button
      className="Button"
      onClick={()=>{
        router.push(`/products/${product.product_id}`);
      }}
    >Buy Now</button>
    
    <style jsx>{`
      
      .product_item_wrapper {
        border: 1px solid black;
        padding: 1rem;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        width: 48%;
        background-color: var(--white);
      }

    `}</style>
  </div>  
  )
}