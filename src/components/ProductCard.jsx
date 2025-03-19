import React from 'react';
 import RatingWidget from './RatingWidget';
 
 function ProductCard({ product, onRatingSubmit }) {
   return (
     <div className="border rounded-xl p-4 shadow-lg">
       <h2 className="text-xl font-semibold">{product.name}</h2>
       <p>{product.description}</p>
       <p className="text-gray-600">Average Rating: {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)</p>
       <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
     </div>
   );
 }
 
 export default ProductCard;