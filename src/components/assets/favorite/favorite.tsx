'use client'
const Favourite = () => {
    // Dummy function to handle item removal
    const handleRemove = (itemName:any) => {
        console.log(`Remove ${itemName}`);
        // Implement actual removal logic here
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 h-[100vh]">
            {/* Title */}
            <div className="px-4 py-4">
                <h1 className="text-center text-gray-900 text-xl font-black">Favorites</h1>
            </div>

            {/* Items */}
            <div className="divide-y divide-gray-200">
                {/* Sprite Can */}
                <div className="flex items-center p-4 hover:bg-gray-50 transition duration-200 ease-in-out">
                    <img className="w-16 h-16 object-cover rounded-full shadow-md" src="sprite-can.jpg" alt="Sprite Can" />
                    <div className="ml-4 flex-grow">
                        <h2 className="text-lg font-bold text-gray-900">Sprite Can</h2>
                        <p className="text-sm text-gray-500">325ml, Price</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">$1.50</p>
                    </div>
                    <button
                        onClick={() => handleRemove('Sprite Can')}
                        className="w-8 h-8 border rounded-full text-red-500 flex justify-center items-center ml-4 hover:bg-red-100 transition duration-200 ease-in-out"
                    >
                        <span className="text-lg font-bold">X</span>
                    </button>
                </div>

                {/* Diet Coke */}
                <div className="flex items-center p-4 hover:bg-gray-50 transition duration-200 ease-in-out">
                    <img className="w-16 h-16 object-cover rounded-full shadow-md" src="diet-coke.jpg" alt="Diet Coke" />
                    <div className="ml-4 flex-grow">
                        <h2 className="text-lg font-bold text-gray-900">Diet Coke</h2>
                        <p className="text-sm text-gray-500">355ml, Price</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">$1.99</p>
                    </div>
                    <button
                        onClick={() => handleRemove('Diet Coke')}
                        className="w-8 h-8 border rounded-full text-red-500 flex justify-center items-center ml-4 hover:bg-red-100 transition duration-200 ease-in-out"
                    >
                        <span className="text-lg font-bold">X</span>
                    </button>
                </div>

                {/* Apple & Grape Juice */}
                <div className="flex items-center p-4 hover:bg-gray-50 transition duration-200 ease-in-out">
                    <img className="w-16 h-16 object-cover rounded-full shadow-md" src="apple-grape-juice.jpg" alt="Apple & Grape Juice" />
                    <div className="ml-4 flex-grow">
                        <h2 className="text-lg font-bold text-gray-900">Apple & Grape Juice</h2>
                        <p className="text-sm text-gray-500">2L, Price</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">$15.50</p>
                    </div>
                    <button
                        onClick={() => handleRemove('Apple & Grape Juice')}
                        className="w-8 h-8 border rounded-full text-red-500 flex justify-center items-center ml-4 hover:bg-red-100 transition duration-200 ease-in-out"
                    >
                        <span className="text-lg font-bold">X</span>
                    </button>
                </div>

                {/* Coca Cola Can */}
                <div className="flex items-center p-4 hover:bg-gray-50 transition duration-200 ease-in-out">
                    <img className="w-16 h-16 object-cover rounded-full shadow-md" src="coca-cola-can.jpg" alt="Coca Cola Can" />
                    <div className="ml-4 flex-grow">
                        <h2 className="text-lg font-bold text-gray-900">Coca Cola Can</h2>
                        <p className="text-sm text-gray-500">325ml, Price</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">$4.99</p>
                    </div>
                    <button
                        onClick={() => handleRemove('Coca Cola Can')}
                        className="w-8 h-8 border rounded-full text-red-500 flex justify-center items-center ml-4 hover:bg-red-100 transition duration-200 ease-in-out"
                    >
                        <span className="text-lg font-bold">X</span>
                    </button>
                </div>

                {/* Pepsi Can */}
                <div className="flex items-center p-4 hover:bg-gray-50 transition duration-200 ease-in-out">
                    <img className="w-16 h-16 object-cover rounded-full shadow-md" src="pepsi-can.jpg" alt="Pepsi Can" />
                    <div className="ml-4 flex-grow">
                        <h2 className="text-lg font-bold text-gray-900">Pepsi Can</h2>
                        <p className="text-sm text-gray-500">330ml, Price</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">$4.99</p>
                    </div>
                    <button
                        onClick={() => handleRemove('Pepsi Can')}
                        className="w-8 h-8 border rounded-full text-red-500 flex justify-center items-center ml-4 hover:bg-red-100 transition duration-200 ease-in-out"
                    >
                        <span className="text-lg font-bold">X</span>
                    </button>
                </div>
            </div>

            {/* Button */}
            <div className="p-4">
                <button className="w-full bg-green-500 text-white text-lg font-semibold py-3 px-4 rounded-xl transition-transform transform hover:scale-105">
                    Add All To Cart
                </button>
            </div>
        </div>
    );
}

export default Favourite;
