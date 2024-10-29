'use client'
import { useState } from 'react';
import Image from 'next/image';

const Cart = () => {
  const initialCart = [
    { id: 1, name: 'Bell Pepper Red', price: 4.99, quantity: 1, imgSrc: 'https://via.placeholder.com/70x65' },
    { id: 2, name: 'Egg Chicken Red', price: 4.99, quantity: 1, imgSrc: 'https://via.placeholder.com/70x65' },
    { id: 3, name: 'Organic Bananas', price: 4.99, quantity: 1, imgSrc: 'https://via.placeholder.com/70x65' },
    { id: 4, name: 'Ginger', price: 4.99, quantity: 1, imgSrc: 'https://via.placeholder.com/70x65' },
  ];

  const [cartItems, setCartItems] = useState(initialCart);

  const incrementQuantity = (id:any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id:any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id:any) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="MyCart max-w-full h-[100vh] p-4 mx-auto relative bg-white">
      {/* Cart Title */}
      <div className="text-center text-gray-900 text-xl font-black">My Cart</div>

      {/* Cart Items */}
      <div className="mt-4 space-y-6">
      {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <img className="w-16 h-16" src={item.imgSrc} alt={item.name} />
            <div className="flex-1 ml-4">
              <div className="text-gray-900 text-base font-black">{item.name}</div>
              <div className="text-neutral-500 text-sm">1kg, Price</div>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="w-8 h-8 border rounded-full"
                >
                  -
                </button>
                <div className="text-gray-900 text-base font-semibold mx-4">{item.quantity}</div>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="w-8 h-8 border rounded-full flex justify-center items-center"
                >
                  <Image src={'/plusGreen.svg'} width={15} height={15} alt="+" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-900 text-lg font-semibold">₹{(item.price * item.quantity).toFixed(2)}</div>
              <button
                onClick={() => removeItem(item.id)}
                className="w-8 h-8 border rounded-full  text-white flex justify-center items-center"
              >
                <span className="text-lg font-bold text-red-500">X</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Button */}
      <div className="mt-6">
        <button className="w-full h-16 bg-[#53B175] rounded-2xl flex justify-center items-center">
          <span className="text-neutral-50 text-lg font-semibold">Go to Checkout</span>
          <div className="ml-4 bg-green-500 rounded px-2 py-1 text-neutral-50 text-xs font-semibold">₹{totalAmount}</div>
        </button>
      </div>
    </div>
  );
};

export default Cart;
