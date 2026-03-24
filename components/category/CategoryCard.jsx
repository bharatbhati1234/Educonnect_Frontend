// CategoryCard.jsx file -------------------------------------------------------------


import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <Link href={`/categories/${category._id}`}>
      <div className="flex items-center gap-4 p-5 border rounded-xl 
                      hover:shadow-md transition cursor-pointer bg-white">

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center 
                        bg-green-100 text-green-600 rounded-full">
          📚
        </div>

        {/* Name */}
        <h3 className="font-medium text-lg">
          {category.name}
        </h3>

      </div>
    </Link>
  );
};

export default CategoryCard;