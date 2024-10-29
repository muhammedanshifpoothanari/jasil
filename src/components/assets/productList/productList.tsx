'use client'
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <div className="w-full h-full bg-white">
  <div className="flex items-center justify-between px-4 py-4 fixed top-0 z-10 w-full bg-white">
    <button className="w-4 h-4">
    <Image src={'/back.svg'} width={10} height={10} alt="<-" /> 
    </button>
    {isScrolled ? (
          <Input
            className=" text-neutral-500 text-sm font-semibold text-decoration-none flex items-center bg-zinc-100 rounded-2xl p-3 w-[80%]"
            placeholder="Search Store"
          />
        ) : (
          <h1 className="text-gray-900 text-xl font-black">Beverages</h1>
        )}
    <div className="flex items-center space-x-2">
      <div className="relative">
      <button className="w-4 h-4">
    <Image src={'/filter.svg'} width={20} height={20} alt="<-" /> 
    </button>
      </div>
     
    </div>
  </div>




  <div className="grid grid-cols-2 gap-4 px-4 py-4 md:grid-cols-3 lg:grid-cols-4">
  <div className="w-44 h-64 relative bg-white rounded-2xl shadow  border border-neutral-200 p-4">
  <img className="w-36 h-28 mb-4 mx-auto" src="https://via.placeholder.com/144x112" />
  <div className=" border-neutral-200  flex flex-col gap-2">
  <div className="text-black  font-bold  leading-[18px]">
  Bell Pepper Red
</div>
  <div className="text-neutral-500 text-sm font-black  leading-none">1kg, Price</div>
  <div className="text-gray-900 text-lg   leading-none tracking-tight mt-2">₹4.99</div>

  <div className="absolute bottom-4 right-4 w-11 h-11 bg-[#53B175] rounded-2xl flex align-center item-center justify-center">
    <Image src={'/plus.svg'} width={15} height={15}  alt="+"/>
  </div>
  </div>
</div>

<div className="w-44 h-64 relative bg-white rounded-2xl shadow  border border-neutral-200 p-4">
  <img className="w-36 h-28 mb-4 mx-auto" src="https://via.placeholder.com/144x112" />
  <div className=" border-neutral-200  flex flex-col gap-2">
  <div className="text-black  font-bold  leading-[18px]">
  Bell Pepper Red
</div>
  <div className="text-neutral-500 text-sm font-black  leading-none">1kg, Price</div>
  <div className="text-gray-900 text-lg   leading-none tracking-tight mt-2">₹4.99</div>

  <div className="absolute bottom-4 right-4 w-11 h-11 bg-[#53B175] rounded-2xl flex align-center item-center justify-center">
    <Image src={'/plus.svg'} width={15} height={15}  alt="+"/>
  </div>
  </div>
</div>


<div className="w-44 h-64 relative bg-white rounded-2xl shadow  border border-neutral-200 p-4">
  <img className="w-36 h-28 mb-4 mx-auto" src="https://via.placeholder.com/144x112" />
  <div className=" border-neutral-200  flex flex-col gap-2">
  <div className="text-black  font-bold  leading-[18px]">
  Bell Pepper Red
</div>
  <div className="text-neutral-500 text-sm font-black  leading-none">1kg, Price</div>
  <div className="text-gray-900 text-lg   leading-none tracking-tight mt-2">₹4.99</div>

  <div className="absolute bottom-4 right-4 w-11 h-11 bg-[#53B175] rounded-2xl flex align-center item-center justify-center">
    <Image src={'/plus.svg'} width={15} height={15}  alt="+"/>
  </div>
  </div>
</div>
<div className="w-44 h-64 relative bg-white rounded-2xl shadow  border border-neutral-200 p-4">
  <img className="w-36 h-28 mb-4 mx-auto" src="https://via.placeholder.com/144x112" />
  <div className=" border-neutral-200  flex flex-col gap-2">
  <div className="text-black  font-bold  leading-[18px]">
  Bell Pepper Red
</div>
  <div className="text-neutral-500 text-sm font-black  leading-none">1kg, Price</div>
  <div className="text-gray-900 text-lg   leading-none tracking-tight mt-2">₹4.99</div>

  <div className="absolute bottom-4 right-4 w-11 h-11 bg-[#53B175] rounded-2xl flex align-center item-center justify-center">
    <Image src={'/plus.svg'} width={15} height={15}  alt="+"/>
  </div>
  </div>
</div>
<div className="w-44 h-64 relative bg-white rounded-2xl shadow  border border-neutral-200 p-4">
  <img className="w-36 h-28 mb-4 mx-auto" src="https://via.placeholder.com/144x112" />
  <div className=" border-neutral-200  flex flex-col gap-2">
  <div className="text-black  font-bold  leading-[18px]">
  Bell Pepper Red
</div>
  <div className="text-neutral-500 text-sm font-black  leading-none">1kg, Price</div>
  <div className="text-gray-900 text-lg   leading-none tracking-tight mt-2">₹4.99</div>

  <div className="absolute bottom-4 right-4 w-11 h-11 bg-[#53B175] rounded-2xl flex align-center item-center justify-center">
    <Image src={'/plus.svg'} width={15} height={15}  alt="+"/>
  </div>
  </div>
</div>

<div className="w-44 h-64 relative bg-white rounded-2xl shadow  border border-neutral-200 p-4">
  <img className="w-36 h-28 mb-4 mx-auto" src="https://via.placeholder.com/144x112" />
  <div className=" border-neutral-200  flex flex-col gap-2">
  <div className="text-black  font-bold  leading-[18px]">
  Bell Pepper Red
</div>
  <div className="text-neutral-500 text-sm font-black  leading-none">1kg, Price</div>
  <div className="text-gray-900 text-lg   leading-none tracking-tight mt-2">₹4.99</div>

  <div className="absolute bottom-4 right-4 w-11 h-11 bg-[#53B175] rounded-2xl flex align-center item-center justify-center">
    <Image src={'/plus.svg'} width={15} height={15}  alt="+"/>
  </div>
  </div>
</div>
  </div>


</div>

    )
}

export default ProductList;