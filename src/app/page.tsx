'use client';

// import React, { useState } from 'react';
import Banner from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { isMapIterator } from 'util/types';

const Page: React.FC = () => {
//   const [filters, setFilters] = useState({
//     rating: 4.5,
//     petFriendly: false,
//     outdoorSeating: false,
//     servesAlcohol: false,
//     openNow: false,
//   });

//   const [restaurants, setRestaurants] = useState<any>([
//     {
//       name: 'Restaurant A',
//       rating: 4.7,
//       petFriendly: true,
//       outdoorSeating: true,
//       servesAlcohol: true,
//       openNow: true,
//     },
//     {
//       name: 'Restaurant B',
//       rating: 4.3,
//       petFriendly: false,
//       outdoorSeating: true,
//       servesAlcohol: false,
//       openNow: false,
//     },
//     // More sample restaurants
//   ]);

//   // Handle filter change from RestaurantFilters
//   const handleFilterChange = (newFilters: any) => {
//     setFilters(newFilters);
//   };

//   // Filter restaurants based on applied filters
//   const filteredRestaurants = restaurants.filter((restaurant: any) => {
//     return (
//       restaurant.rating >= filters.rating &&
//       (filters.petFriendly ? restaurant.petFriendly : true) &&
//       (filters.outdoorSeating ? restaurant.outdoorSeating : true) &&
//       (filters.servesAlcohol ? restaurant.servesAlcohol : true) &&
//       (filters.openNow ? restaurant.openNow : true)
//     );
//   });

  return (
    <div>
      <Banner />
      
   
    </div>
  );
};

export default Page;
