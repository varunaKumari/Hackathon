"use client";

import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronDown } from 'react-icons/fa';

const ReviewsSection = () => {
  interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }

  const [reviews, setReviews] = useState<Review[]>([]);
  const [visibleReviews, setVisibleReviews] = useState(6);

  useEffect(() => {
    const fetchedReviews = [
      { id: 1, name: 'John Doe', rating: 5, comment: 'Excellent product!', date: '2023-05-15' },
      { id: 2, name: 'Jane Smith', rating: 4, comment: 'Great quality for the price.', date: '2023-05-14' },
      { id: 3, name: 'Mike Johnson', rating: 3, comment: 'Decent product.', date: '2023-05-13' },
      { id: 4, name: 'Emily Brown', rating: 5, comment: 'Absolutely love it!', date: '2023-05-12' },
      { id: 5, name: 'Chris Lee', rating: 2, comment: 'Disappointed with the quality.', date: '2023-05-11' },
      { id: 6, name: 'Sarah Wilson', rating: 4, comment: 'Good product overall.', date: '2023-05-10' },
      { id: 7, name: 'David Taylor', rating: 5, comment: 'Exceeded my expectations!', date: '2023-05-09' },
      { id: 8, name: 'Lisa Anderson', rating: 3, comment: 'Average product.', date: '2023-05-08' },
      { id: 9, name: 'Tom Harris', rating: 4, comment: 'Very satisfied!', date: '2023-05-07' },
      { id: 10, name: 'Anna White', rating: 5, comment: 'Will buy again!', date: '2023-05-06' },
      { id: 11, name: 'James Green', rating: 3, comment: 'It’s okay.', date: '2023-05-05' },
      { id: 12, name: 'Laura Black', rating: 4, comment: 'Good value for money.', date: '2023-05-04' },
    ];
    setReviews(fetchedReviews);
  }, []);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} size={20} color={index < rating ? '#fbbf24' : '#d1d5db'} />
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, visibleReviews).map(review => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <p className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      {visibleReviews < reviews.length && (
        <div className="text-center mt-8">
          <button onClick={() => setVisibleReviews(prev => prev + 3)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
            Load More <span className="inline-block ml-1"><FaChevronDown /></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;