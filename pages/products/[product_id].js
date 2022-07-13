import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import * as ProductService from "../../services/products-services";

const initialProduct = {
  product_id: null,
  name: "",
  description: null,
  brand: {},
  category: {},
  option_groups: {},
  inventory: [{variations: []}]
}

const initialSelected = {
  // sku: null,
  option_groups: [],
  inventory_index: 0,
  sku: null
}

export default function ProductPage () {
  const router = useRouter();
  const [product, setProduct] = useState(initialProduct);
  const [selected, setSelected] = useState(initialSelected);

  useEffect(() => {
    if(!router.query.product_id) return;

    const fetchProduct = async () => {
      try {
        const productToUse = await ProductService.findByProductId(router.query.product_id);
        setProduct(productToUse);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProduct();
  }, [router.query.product_id]);

  useEffect(() => {
    setSelected(s => {
      return {
        ...s,
        sku: product.inventory[selected.inventory_index].sku
      }
    })
  }, [product, selected.inventory_index])

  product.inventory.forEach(inv => {
    console.log(inv)
  });

  return (
    <div
      className="product_wrapper"
    >
      {product.product_id && (
        <div
          className="product_card"
        >
          <h4>{product.brand.name}<br/>{product.name}</h4>
          <p>{product.category.name}</p>
          
          <h4>${product.inventory[selected.inventory_index].price}</h4>
          {product.inventory[selected.inventory_index].amount_in_stock < 26 ? <p>Only {product.inventory[selected.inventory_index].amount_in_stock} left in stock</p> : ''}

          <div
            className="option_groups"
          >
            {JSON.stringify(product.inventory)}
          </div>
          
          <button
            className="Button"
            onClick={() => {

            }}
          >Add To Cart</button>
        </div>
      )}


      <style jsx>{`
        
        .product_wrapper {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          padding-top: 1rem;
        }
        
        .product_card {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          border: 1px solid black;
          padding: 1rem;
          background-color: var(--white);
          gap: 1rem;
        }

        .option_groups {
          display: flex;
          flex-flow: column wrap;
          gap: 1rem;
        }

        .option_group {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        }

      `}</style>
    </div>
  )
}