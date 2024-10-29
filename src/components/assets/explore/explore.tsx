'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useSelector, useDispatch } from "react-redux";
import { setPreferenceStateReducer } from "@/lib/redux/preferenceState/preferenceSlice";
import { useRouter } from "next/navigation";

const Explore = () => {
    const getRandomColor = () => {
        const colors = [
          'bg-green-400/10',
          'bg-orange-400/10',
          'bg-red-300/25',
          'bg-amber-200/25',
          'bg-purple-300/25',
          'bg-sky-200/25',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      };
      
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://bakenjoyobackend.onrender.com/api/categories');
        const categoriesData = response.data;

        setCategories(categoriesData);

        const categorySubcategories:any = {};
        categoriesData.forEach((category:any) => {
          if (category.subcategories) {
            categorySubcategories[category.name] = category.subcategories;
          }
        });
     console.log(categoriesData,'jnhgf');
     
        setSubcategories(categorySubcategories);
      } catch (error) {
        console.error('Failed to fetch categories.');
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category:any) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset subcategory selection
  };

  const handleSubcategoryClick = (subcategory:any) => {
    setSelectedSubcategory(subcategory);
    dispatch(setPreferenceStateReducer({ category: selectedCategory, subcategory }));
    router.push('/ProductList')
  };

  const currentCategories = categories;
  const currentSubcategories = selectedCategory ? subcategories[selectedCategory] || [] : [];

  return (
    <div className="Explore w-full  bg-white p-4">
      <div className="flex flex-col items-center">
        <div className="text-gray-900 text-xl font-bold mb-6">Find Products</div>
        <Input
          className="text-neutral-500 text-sm font-semibold text-decoration-none flex items-center bg-zinc-100 rounded-2xl p-3 mb-6 w-full max-w-md"
          placeholder="Search Store"
        />
      </div>

      {/* Category Selection */}
      {!selectedCategory && (
        <div className="grid grid-cols-2 gap-4 justify-center">
          {currentCategories.map((category:any, index:any) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className={`flex flex-col items-center justify-between p-4 ${getRandomColor()} rounded-2xl shadow border ${getRandomColor().replace('/10', '/70')} h-[189.11px] w-36 cursor-pointer`}
            >
       
              <img 
            className="aspect-ratio-400/300 object-cover" 
            alt="Product Image" 
            height="300" 
            width="400" 
            src={`https://res.cloudinary.com/diwhddwig/image/upload/f_auto,q_auto/${category.imageUrl}`} 
          />
              <div className="text-gray-900 text-base font-bold text-center">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Subcategory Selection */}
      {selectedCategory && (
        <div>
          <button onClick={() => setSelectedCategory(null)} className="text-blue-500 mb-4">Back to Categories</button>
          <div className="grid grid-cols-2 gap-4 justify-center">
            {currentSubcategories.map((subcategory:any, index:any) => (
              <div
                key={index}
                onClick={() => handleSubcategoryClick(subcategory.name)}
                className={`flex flex-col items-center justify-between p-4 ${getRandomColor()} rounded-2xl shadow border ${getRandomColor().replace('/10', '/70')} h-[189.11px] w-36 cursor-pointer`}
              >
                 <img 
            className="aspect-ratio-400/300 object-cover" 
            alt="Product Image" 
            height="300" 
            width="400" 
            src={`https://res.cloudinary.com/diwhddwig/image/upload/f_auto,q_auto/${subcategory.imageUrl}`} 
          />
               
                <div className="text-gray-900 text-base font-bold text-center">
                  {subcategory.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
