import React, { useState } from 'react';
 
 function RatingWidget({ productId, onRatingSubmit }) {
   const [rating, setRating] = useState(0);
   const [hoveredRating, setHoveredRating] = useState(0);
 
   const handleSubmit = () => {
     if (rating >= 1 && rating <= 5) {
       onRatingSubmit(productId, rating);
       setHoveredRating(0); // Reset hover effect after submitting
     }
   };
 
   return (
     <div className="mt-2">
       <div className="flex gap-1">
         {[1, 2, 3, 4, 5].map((star) => (
           <span
             key={star}
             onClick={() => setRating(star)}
             onMouseEnter={() => setHoveredRating(star)}
             onMouseLeave={() => setHoveredRating(0)}
             className={`cursor-pointer text-2xl ${
               star <= (hoveredRating || rating) ? 'text-yellow-500' : 'text-gray-300'
             }`}
           >
             ★
           </span>
         ))}
       </div>
       <button
         onClick={handleSubmit}
         className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
       >
         Submit Rating
       </button>
       {rating > 0 && (
         <p className="text-gray-600 mt-1">Selected Rating: {rating} star{rating > 1 ? 's' : ''}</p>
       )}
     </div>
   );
 }
 
 export default RatingWidget;