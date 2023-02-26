import { useQuery } from "@tanstack/react-query";
import React from "react";

const Search = () => {
  const { data: categorys = [] } = useQuery({
    queryKey: ["categorys"],
    queryFn: () =>
      fetch(" http://localhost:5000/categories").then((res) => res.json()),
  });

  return (
    <div className="container mx-auto ">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-10 justify-center ">
        <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
          <label htmlFor="email" className="text-xl font-medium">
            Select Category
          </label>
          <select
            required
            name="category"
            className="select w-full max-w-xs  select-bordered"
          >
            <option disabled selected>
              Select category
            </option>
            {categorys.map((category) => (
              <option key={category._id} value={category?.category}>
                {category?.category}
              </option>
            ))}
          </select>
        </div>

        <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
          <label htmlFor="email" className="text-xl font-medium">
            Select Category
          </label>
          <select
            required
            name="category"
            className="select w-full max-w-xs  select-bordered"
          >
            <option disabled selected>
              Select Location
            </option>
            {categorys.map((category) => (
              <option key={category._id} value={category?.category}>
                {category?.category}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-9">
          <button type="search" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
