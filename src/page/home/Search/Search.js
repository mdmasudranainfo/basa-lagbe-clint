import { useQueries, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Search = () => {
  const { data: categorys = [] } = useQuery({
    queryKey: ["categorys"],
    queryFn: () =>
      fetch(" http://localhost:5000/categories").then((res) => res.json()),
  });

  const { data: locations = [] } = useQuery({
    queryKey: ["locations"],
    queryFn: () =>
      fetch(" http://localhost:5000/locations").then((res) => res.json()),
  });

  const [homes, setHome] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const from = event.target;
    const location = from.location.value;
    const category = from.category.value;

    fetch(
      `http://localhost:5000/search?location=${location}&category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHome(data);
      })
      .catch((err) => console.log(err));
  };
  console.log(homes);

  return (
    <div className="container mx-auto ">
      <form onSubmit={handleSearch}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-10 justify-items-center ">
          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Select Category
            </label>
            <select
              required
              name="category"
              className="select w-full max-w-xs  select-bordered">
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
              name="location"
              className="select w-full max-w-xs  select-bordered">
              <option disabled selected>
                Select Location
              </option>
              {locations.map((location) => (
                <option key={location._id} value={location?.location}>
                  {location?.location}
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
      </form>
    </div>
  );
};

export default Search;
