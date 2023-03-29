import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { BiBuildingHouse } from "react-icons/bi";
import {
  GiFamilyHouse,
  GiLighthouse,
  GiVikingLonghouse,
  GiMushroomHouse,
} from "react-icons/gi";

const OurCategory = () => {
  const { data: categorys = [] } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="container mx-auto">
      <div className="mt-20 mb-20">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1">
          <div className="flex justify-center items-center">
            <h1 className="text-7xl font-extrabold text-teal-600 mb-10 lg:block hidden">
              Rental <br /> Category
            </h1>
            <h1 className="text-4xl font-bold text-teal-600 mb-10  lg:hidden">
              Rental Category
            </h1>
          </div>
          <div className="grid col-span-2">
            <div className="grid grid-cols-3 gap-8 ">
              {categorys.map((category) => (
                <Link
                  to={`/homes/${category.category}`}
                  key={category._id}
                  className="flex flex-col items-center"
                >
                  <img src={category.picture} alt="" className="w-[70px]" />
                  <p className="mt-3 text-base font-bold text-gray-700 hover:text-teal-600">
                    {category.category}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCategory;
