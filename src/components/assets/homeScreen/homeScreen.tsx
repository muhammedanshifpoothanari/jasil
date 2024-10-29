'use client';
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setPreferenceStateReducer } from "@/lib/redux/preferenceState/preferenceSlice";
import axios from 'axios';

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState('offers');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  const [data, setData] = useState<any>({});
  
  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://bakenjoyobackend.onrender.com/api/products/');
      console.log('Fetched products:', response.data);
      
      // Transform the fetched data to match the structure expected by your frontend
      const transformedData = response.data.reduce((acc: any, product: any) => {
        const { type, name, category, subcategory, resource, bestSeller, price, offers } = product;
        console.log(category,'ctdxsbsadsad');
     
        if (!acc[type]) {
          acc[type] = {
            banner: [{ link: "", imageUrl: "https://via.placeholder.com/369x180" }],
            exclusiveOffers: [],
            subCategories: [],
            bestSelling: [],
          };
        }
        console.log(offers,'njbhhgv');
        

        acc[type].exclusiveOffers.push({ name, description: offers[0]?.description || '', imageUrl: resource, price, discountPercentage:offers[0].discountPercentage });
        acc[type].subCategories.push({ name: category, imageUrl: "https://via.placeholder.com/72x72" });
        if (bestSeller) {
          acc[type].bestSelling.push({ name, description: "Best seller", price, imageUrl: resource });
        }

        return acc;
      }, {});

      setData(transformedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  } 





  useEffect(() => {
    fetchProducts()
  }, [])

  const currentData = data[userType] || {};
  const getRandomBgColor = () => {
    const colors = ['bg-orange-400','bg-green-400'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="HomeScreen w-full max-w-4xl h-auto bg-white mx-auto p-4">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-[300px] shadow-lg mx-auto z-20">
          <Dialog.Title className="text-xl font-bold text-center mb-4">Choose Your Type</Dialog.Title>
          
          <div className="flex flex-col space-y-4">
            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold" onClick={() => {
              setUserType('bakers');
              dispatch(setPreferenceStateReducer({type: 'bakers'}))
              setIsOpen(false);
            }}>
              Bakers
            </button>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold" onClick={() => {
              setUserType('hotels');
              dispatch(setPreferenceStateReducer({type: 'hotels'}))
              setIsOpen(false);
            }}>
              Hotels
            </button>
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold" onClick={() => {
              setUserType('offers');
              dispatch(setPreferenceStateReducer({type: 'offers'}))
              setIsOpen(false);
            }}>
              Offers
            </button>
          </div>
        </div>
      </Dialog>
      <div className="flex flex-col items-center justify-center space-x-2 space-y-2">
        <div>
          <div className="flex items-center justify-center">

          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center justify-center">
            <Image src="/location.svg" alt="Location Icon" width={15} height={15} />
          </div>
          <div className="text-neutral-600 text-lg font-semibold ">
            Kazhakkootum
          </div>
        </div>
      </div>

      <div className="Search w-full max-w-md h-12 relative flex items-center bg-zinc-100 rounded-2xl px-4 my-2">
        <div className="flex-shrink-0">
          <img src="/search.svg" alt="Search Icon" className="w-5 h-5" />
        </div>
        <div className="ml-2 text-neutral-500 text-sm font-semibold ">
          Search Store
        </div>
      </div>

      <div className="Banner w-full h-28 relative bg-pink-800 rounded-lg mb-8 shadow ">
        <div className="relative w-full h-full bg-cover bg-center opacity-90 rounded-lg" style={{ backgroundImage: `url(${currentData.banner?.[0]?.imageUrl || 'https://via.placeholder.com/369x180'})` }}>
          <div className="absolute inset-0 bg-white/50 rounded-lg border border-zinc-100"></div>
        </div>
      </div>

      <div className="Exclusive offer w-full h-auto mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-900 text-2xl font-semibold ">Exclusive offer</div>
          <div className="text-green-400 text-base font-semibold ">See all</div>
        </div>
        <div className="flex gap-4">
          {currentData.exclusiveOffers?.map((offer:any, index:any) => (
            <div key={index} className="w-44 h-64 relative bg-white rounded-2xl shadow border border-neutral-200 p-4">
              <img 
            className="aspect-ratio-400/300 object-cover" 
            alt="Product Image" 
            height="300" 
            width="400" 
            src={`https://res.cloudinary.com/diwhddwig/image/upload/f_auto,q_auto/${offer.imageUrl}`} 
          />

              <div className="border-neutral-200 flex flex-col gap-2">
                <div className="text-black font-bold leading-[18px]">{offer.name}</div>
                <div className="text-neutral-500 text-sm font-black leading-none">{offer.discountPercentage}% OFF</div>
                <div className="text-gray-900 text-lg leading-none tracking-tight mt-2">₹{offer.price}</div>
                <div className="absolute bottom-4 right-4 w-11 h-11 bg-[#53B175] rounded-2xl flex align-center item-center justify-center">
                  <Image src='/plus.svg' width={15} height={15} alt="+" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="Groceries w-full h-auto mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="text-black text-2xl font-semibold ">Categories</div>
          <div className="text-green-400 text-base font-semibold ">See all</div>
        </div>
        <div className="flex overflow-x-auto gap-4">
          {currentData.subCategories?.map((category:any, index:any):any => (
            <div key={index} className={`flex-none w-64 h-28 relative ${getRandomBgColor()} bg-opacity-20 rounded-2xl flex items-center shadow border border-neutral-200`}>
              <img className="w-16 h-16 ml-4" src={category.imageUrl} alt={category.name} />
              <div className="text-neutral-700 text-xl font-semibold ml-4">{category.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="BestSelling w-full h-auto mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-900 text-2xl font-semibold ">Best Selling</div>
          <div className="text-green-400 text-base font-semibold ">See all</div>
        </div>
        <div className="flex gap-4">
          {currentData.bestSelling?.map((item:any, index:any) => (
            <div key={index} className="w-44 h-64 relative bg-white rounded-2xl shadow border border-neutral-200 p-4">
  <img 
            className="aspect-ratio-400/300 object-cover" 
            alt="Product Image" 
            height="300" 
            width="400" 
            src={`https://res.cloudinary.com/diwhddwig/image/upload/f_auto,q_auto/${item.imageUrl}`} 
          />              <div className="border-neutral-200 flex flex-col gap-2">
                <div className="text-black font-bold leading-[18px]">{item.name}</div>
                <div className="text-neutral-500 text-sm font-black leading-none">{item.description}</div>
                <div className="text-gray-900 text-lg leading-none tracking-tight mt-2">₹{item.price}</div>
                <div className="absolute bottom-4 right-4 w-11 h-11 bg-[#53B175] rounded-2xl flex align-center item-center justify-center">
                  <Image src='/plus.svg' width={15} height={15} alt="+" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default HomeScreen;
