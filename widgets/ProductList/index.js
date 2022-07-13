import { ProductItem } from "../ProductItem"

export const ProductList = ({products = []}) => {
  return (
  <div
    className="product_list_wrapper"
  >
    <div
      className="product_list"
    >
      {products.length > 0 && products.map(p => {
        return <ProductItem key={p.product_id} product={p}/>
      })}
    </div>
    <style jsx>{`
      .product_list_wrapper {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        padding-top: 1rem;
      }
      
      .product_list {
        width: 90%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        row-gap: 1rem;
      }
      
    `}</style>
  </div>  
  )
}