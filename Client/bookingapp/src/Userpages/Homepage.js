import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../Axios/axiosinstance";
import { setProperty } from "../Features/propertySlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const PropertyCard = () => {
   const property = useSelector((state) => state.property.property);
   const dispatch = useDispatch();
   console.log("property",property);
   

   useEffect(() => {
       const fetchProperties = async () => {
           try {
               const response = await axiosInstance.get('/allproperties');
               console.log("API Response:", response.data);
               dispatch(setProperty(response.data.property || []));
           } catch (error) {
               console.error("API Fetch Error:", error);
           }
       };
       fetchProperties();
   }, [dispatch]);

   if (!Array.isArray(property)) {
       return <p>Loading properties...</p>;
   }

   return (
       <div className="px-4 sm:px-8 lg:px-16 py-8">
           <h2 className="text-xl font-semibold mb-6">Still interested in these properties?</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {property.map((item) => (
                   <div
                       key={item._id}
                       className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                   >
                       <div className="relative">
                           <img
                               src={item.images[0]}
                               alt={item.Propertyname}
                               className="h-40 w-full object-cover"
                           />
                           <button className="absolute top-2 right-2 bg-white p-2 border-1 border-black rounded-full shadow-md hover:scale-110">
                               <FontAwesomeIcon icon={faHeart} className="text-lg" />
                           </button>
                       </div>
                       <div className="p-4">
                           <h3 className="text-lg font-semibold mb-1">{item.Propertyname}</h3>
                           <p className="text-sm text-gray-500 mb-2">{item.city}, {item.country}</p>
                       </div>
                   </div>
               ))}
           </div>
       </div>
   );
};

export default PropertyCard;
