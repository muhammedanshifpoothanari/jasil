import Image from "next/image"

const ProductDetails = () => {
    return (



<div className="product-detail w-full  flex flex-col">
    <div className="product-image w-full  rounded-3xl   flex flex-col">
   

  <div className="flex justify-center ">
    
  <div className="Rectangle69 w-full h-96 bg-zinc-100 backdrop-blur-lg rounded-bl-3xl rounded-br-3xl border border-white/40 shadow-lg flex justify-center items-center">
  <div className="absolute top-5 left-5  w-[90%]">
    <div className="flex justify-between ">
    <button className="text-gray-700">
      <Image src={'/back.svg'} width={10} height={10} alt="<-" /> 
    </button>
    <button className="text-gray-700">
    <Image src={'/share.svg'} width={20} height={10} alt="<-" /> 
    </button>
    </div>
    
   
  </div>
  <img className="rounded-xl shadow-md" src="/test.jpg" alt="loading" />
</div>

  </div>
    </div>

    <div className="product-detail w-full bg-white p-4 flex flex-col">

  <div className="flex justify-between items-center mt-4 ">
    <h1 className="text-2xl font-black text-gray-900">Naturel Red Apple</h1>
    <button className="text-gray-700">
        ❤️
    </button>
  
  </div>
  <div className="flex justify-between items-center mt-4 ">
  <p className="text-base text-neutral-500 mt-1">1kg, Price</p>
  <span className="text-2xl font-black text-gray-900">₹4.99</span>
  </div>
  <div className="flex items-center mt-4">
    <button className="border border-neutral-200 rounded-full w-8 h-8 flex justify-center items-center">
      -
    </button>
    <span className="mx-4 text-lg font-semibold">1</span>
    <button className="border border-neutral-200 rounded-full w-8 h-8 flex justify-center items-center">
      +
    </button>
  </div>

  <div className="mt-6">
    <h2 className="text-base font-semibold text-gray-900">Product Detail</h2>
    <p className="text-xs text-neutral-500 mt-2">
      Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart as part of a healthful and varied diet.
    </p>
  </div>

  <div className="flex justify-between items-center mt-6">
    <h2 className="text-base font-semibold text-gray-900">Nutritions</h2>
    <div className="flex items-center bg-gray-200 rounded px-2 py-1">
      <span className="text-xs font-semibold text-neutral-500">100gr</span>
    </div>
  </div>

  <div className="flex justify-between items-center mt-4">
    <h2 className="text-base font-semibold text-gray-900">Review</h2>
    <div className="flex">
      ⭐️⭐️⭐️⭐️⭐️
    </div>
  </div>

  <div className="mt-6">
    <button className="w-full bg-green-400 text-white py-4 rounded-2xl text-lg font-semibold">Add To Basket</button>
  </div>


  </div>
</div>

    )
}

export default ProductDetails


