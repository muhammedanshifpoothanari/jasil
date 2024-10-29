'use client'
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();
    return (
        <div className="z-1 BottomBar absolute bottom-0 sticky  w-full max-w-lg mx-auto h-20  shadow rounded rounded-br-3xl border border-white/40">
        <div className="Base w-full h-full absolute bg-white shadow border border-gray-[900] rounded-t-[15px] flex flex-col"></div>
        
        <div className="flex justify-between items-center h-full px-4 relative" >
          <div className="flex flex-col items-center"  onClick={() => {router.push('/homeScreen')}}>
            <div className="Store1 w-6 h-6 mb-1">
              <img src="/store1.svg"/>
            </div>
            <div className="text-green-400 text-xs font-semibold ">Shop</div>
          </div>
      
          <div className="flex flex-col items-center"  onClick={() => {router.push('/Explore')}}>
            <div className="Group3 w-7 h-5 mb-1">
              <img src="/Group3.svg"/>
            </div>
            <div className="text-gray-900 text-xs font-semibold " >Explore</div>
          </div>
      
          <div className="flex flex-col items-center"  onClick={() => {router.push('/Cart')}}>
            <div className="Cart w-6 h-6 mb-1">
              <img src="/Vector.svg"/>
            </div>
            <div className="text-gray-900 text-xs font-semibold " >Cart</div>
          </div>
      
          <div className="flex flex-col items-center"  onClick={() => {router.push('/Favourite')}}>
            <div className="Bookmark1 w-6 h-6 mb-1">
              <img src="/bookmark1.svg" />
            </div>
            <div className="text-gray-900 text-xs font-semibold ">Favourite</div>
          </div>
      
          <div className="flex flex-col items-center"  onClick={() => {router.push('/Account')}}>
            <div className="User1 w-6 h-6 mb-1">
              <img src="/user.svg" />
            </div>
            <div className="text-gray-900 text-xs font-semibold " >Account</div>
          </div>
        </div>  
      
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100px] h-[5px] bg-gray-200 rounded-full"></div>
      </div>
      
      

    )
}

export default Footer;