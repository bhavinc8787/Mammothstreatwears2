import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category, imgSrc, discount }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
      onClick={() => navigate(`/category/${category}`)}
    >
      <img src={imgSrc} alt={category} className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 text-xl font-bold text-white">{category}</div>
      <div className="absolute bottom-2 right-2 bg-red-600 text-white py-1 px-3 text-sm font-bold rounded-full">
        {discount} Off
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  const categories = [
    {
      category: 'Refrigerator',
      imgSrc:
        'https://img.freepik.com/free-photo/side-view-woman-looking-fridge_23-2149857561.jpg?t=st=1723471365~exp=1723474965~hmac=3f119627373b3761406a04f7424a70eb65b9b337aeb5ddbfa1df345f0c070510&w=900',
      discount: '78%',
    },
    {
      category: 'TV',
      imgSrc:
        'https://img.freepik.com/free-photo/man-watching-streaming-service-his-tv_23-2149047410.jpg?t=st=1723473087~exp=1723476687~hmac=0fdc959ff295cd227a25b6d40a3c612f6142e9ee0ce57fd0142b43ae0f3eccdb&w=996',
      discount: '50%',
    },
    {
      category: 'Laptop',
      imgSrc:
        'https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714005.jpg?t=st=1723473413~exp=1723477013~hmac=bad6b3b640f66a680680874e05f4f59d570ec97b9f9ede6f6e55a7038b84aba4&w=740',
      discount: '60%',
    },
    {
      category: 'AC',
      imgSrc:
        'https://img.freepik.com/free-photo/young-woman-using-home-technology_23-2149216632.jpg?t=st=1723474081~exp=1723477681~hmac=fe6593204cc1add41118f9172218071459d5d7b4e06cd0d88ed25dfd27dc1821&w=996',
      discount: '60%',
    },
    {
      category: 'Washing Machine',
      imgSrc:
        'https://img.freepik.com/free-photo/woman-taking-clothes-from-washing-machine_23-2149117037.jpg?t=st=1723474193~exp=1723477793~hmac=ee11769aa4ab252d6feb7558ce23eda70bbda7088fa65e18267c89c6e095c885&w=996',
      discount: '35%',
    },
    {
      category: 'Microwave',
      imgSrc:
        'https://img.freepik.com/free-photo/view-modern-air-fryer-with-food_23-2151737049.jpg?t=st=1723489613~exp=1723493213~hmac=b247550ba2e3e4e3c230c37264e86de1c948988f6609e75078f3818e7f1db5ff&w=826',
      discount: '65%',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6 justify-items-center mt-14">
      {categories.map((item, index) => (
        <CategoryCard
          key={index}
          category={item.category}
          imgSrc={item.imgSrc}
          discount={item.discount}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
