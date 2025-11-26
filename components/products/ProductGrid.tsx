// import React from 'react'
// import type { Product } from '../../types/product';
// import { BAGS } from '@/lib/bags';

// function ProductGrid() {
//   return (
//     <div className="product-grid grid grid-cols-4 gap-4">
//       {BAGS.map((Bag) => (
//         <div key={Bag.id} className="product-card w-74 h-112">
//           <img src={Bag.image} alt={Bag.name} className="product-image" />
//           <h3 className="product-name">{Bag.name}</h3>
//           <p className="product-brand">{Bag.brand}</p>
//           <p className="product-price">${Bag.price.toLocaleString()}</p>
//           <p className="product-material">{Bag.material}</p>
//           <p className="product-type">{Bag.type}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductGrid;