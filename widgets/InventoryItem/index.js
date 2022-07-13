import Link from "next/link";

const generateVariationText = (variationList) => {
  let text = '(';

  variationList.forEach((variationItem, i, arr) => {
    text += `${variationItem.option.value}${i !== arr.length - 1 ? ', ' : ''}`;
  });
  
  text = text + ')';

  if(text === '()'){
    return '';
  }

  return text;
}

export const InventoryItem = (props) => {
  const {
    inventoryItem: {
      price,
      product,
      variations,
      sku
    },
  } = props;

  const varaitionText = generateVariationText(variations);
  
  return <div className="inventory_item--wrapper">
    <div
      className="inventory_item--thumbnail"
    ></div>
    <div
      className="inventory_item--content"
    >
      <h4>${price.toFixed(2)}</h4>
      <Link
        href={`/inventory/${sku}`}
        passHref
      >
        <a className="inventory_item--href">{product.brand.name} {product.name} {varaitionText}</a>
      </Link>
      <button className="Button">Add To Cart</button>
    </div>
    
    <style jsx>{`
      .inventory_item--wrapper {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid black;
        padding: 1rem;
      }
      
      .inventory_item--thumbnail {
        width: 100px;
        height: 100px;
        display: inline-block;
        flex-flow: row wrap;
        background-color: #eee;
      }
      
      .inventory_item--content {
        width: 50%;
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
      }

      .inventory_item--href {
        color: var(--blue);
      }
      
      .inventory_item--href:hover {
        text-decoration: underline;
      }

    `}</style>
  </div>
}