import Image from "next/image";

const Success = () => {
    return (
        <div className="OrderAccepted flex flex-col items-center justify-center bg-white p-6 max-w-full h-[100vh]">


  <div className="Group6872 flex flex-col items-center mt-8">
    <div className="Group6871 relative">
        <Image src={'/order.svg'} width={300} height={340} alt="order"/>
     
    </div>
    <div className="relative flex justify-center items-center space-x-2 mt-6">
      <div className="Ellipse20 bg-indigo-500 rounded-full w-4 h-4"></div>
      <div className="Ellipse23 border border-purple-500 rounded-full w-4 h-4"></div>
      <div className="Ellipse24 bg-green-400 rounded-full w-4 h-4"></div>
      <div className="Ellipse25 bg-red-500 rounded-full w-2 h-2"></div>
      <div className="Ellipse26 border border-amber-400 rounded-full w-4 h-4"></div>
      <div className="Ellipse21 border border-green-400 rounded-full w-4 h-4"></div>
      <div className="Ellipse22 bg-green-400 rounded-full w-2 h-2"></div>
    </div>
  </div>

  <div className="YourOrderHasBeenAccepted mt-8 text-center text-gray-900 text-2xl font-semibold">
    Your Order has been<br />accepted
  </div>
  <div className="H2 mt-4 text-center text-neutral-500 text-base font-medium">
    Your items have been placed and are on <br />their way to being processed
  </div>

  <div className="Button w-full mt-8 flex flex-col space-y-4">
    <button className="bg-green-400 rounded-2xl py-4 text-white font-semibold">
      Track Order
    </button>
    <button className="bg-gray-200 rounded-2xl py-4 text-gray-900 font-semibold">
      Back to home
    </button>
  </div>
</div>

    )
}

export default Success;