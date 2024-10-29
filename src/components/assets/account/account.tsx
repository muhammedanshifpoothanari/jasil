import Image from "next/image";

const Account = () => {
    return (
        <div className="Account max-w-full h-[100vh] relative bg-white p-4">


  <div className="flex items-center mt-6">
    <img className="w-16 h-16 rounded-3xl" src="https://via.placeholder.com/63x64" />
    <div className="ml-4">
      <div className="text-xl font-black">Afsar Hossen</div>
      <div className="text-neutral-500">Imshuvo97@gmail.com</div>
    </div>
  </div>

  <div className="mt-8 space-y-4">
    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex items-center space-x-3">
        <div className="OrdersIcon"></div>
        <div className="text-lg font-semibold">Orders</div>
      </div>
      <div className="BackArrow ">
      <Image  src="/rightArrowTwo.svg" alt="Carrot Icon" width={10} height={10}  />
      </div>
    

    </div>

    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex items-center space-x-3">
        <div className="MyDetailsIcon"></div>
        <div className="text-lg font-semibold">My Details</div>
      </div>
      <div className="BackArrow ">
      <Image  src="/rightArrowTwo.svg" alt="Carrot Icon" width={10} height={10}  />
      </div>    </div>

    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex items-center space-x-3">
        <div className="DeliveryAddressIcon"></div>
        <div className="text-lg font-semibold">Delivery Address</div>
      </div>
      <div className="BackArrow ">
      <Image  src="/rightArrowTwo.svg" alt="Carrot Icon" width={10} height={10}  />
      </div>    </div>

    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex items-center space-x-3">
        <div className="PaymentMethodsIcon"></div>
        <div className="text-lg font-semibold">Payment Methods</div>
      </div>
      <div className="BackArrow ">
      <Image  src="/rightArrowTwo.svg" alt="Carrot Icon" width={10} height={10}  />
      </div>    </div>

    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex items-center space-x-3">
        <div className="PromoCordIcon"></div>
        <div className="text-lg font-semibold">Promo Cord</div>
      </div>
      <div className="BackArrow ">
      <Image  src="/rightArrowTwo.svg" alt="Carrot Icon" width={10} height={10}  />
      </div>    </div>

    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex items-center space-x-3">
        <div className="NotifecationsIcon"></div>
        <div className="text-lg font-semibold">Notifecations</div>
      </div>
      <div className="BackArrow ">
      <Image  src="/rightArrowTwo.svg" alt="Carrot Icon" width={10} height={10}  />
      </div>    </div>

    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex items-center space-x-3">
        <div className="HelpIcon"></div>
        <div className="text-lg font-semibold">Help</div>
      </div>
      <div className="BackArrow ">
      <Image  src="/rightArrowTwo.svg" alt="Carrot Icon" width={10} height={10}  />
      </div>    </div>

    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex items-center space-x-3">
        <div className="AboutIcon"></div>
        <div className="text-lg font-semibold">About</div>
      </div>
      <div className="BackArrow ">
      <Image  src="/rightArrowTwo.svg" alt="Carrot Icon" width={10} height={10}  />
      </div>    </div>
  </div>

  <div className="flex justify-center bg-[#F2F3F2] items-center mt-8 w-full h-16 bg-[#53B175] rounded-2xl flex justify-center items-center">
    <div className="LogOut w-32 text-center text-green-400 text-lg font-semibold">Log Out</div>
  </div>

</div>

    )
}

export default Account;