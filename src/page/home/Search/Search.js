import { useQueries, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { MdBedroomChild, MdBathroom, MdOutlineDetails } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const Search = () => {
  const { data: categorys = [] } = useQuery({
    queryKey: ["categorys"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json()),
  });

  const { data: locations = [] } = useQuery({
    queryKey: ["locations"],
    queryFn: () =>
      fetch("http://localhost:5000/locations").then((res) => res.json()),
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
      <form onSubmit={handleSearch} >
        <div className="max-w-[500px] mx-auto">
          
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-10 justify-items-center ">
          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Select Category
            </label>
            <select
              required
              name="category"
              className="select w-full  select-bordered">
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
              Select Location
            </label>
            <select
              required
              name="location"
              className="select w-full select-bordered">
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

          <div className="flex items-center mt-3">
            <button type="search" className="btn btn-primary w-full">
              Search
            </button>
          </div>
        </div>
        </div>
      </form>

      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 mt-10">
        {homes.length > 0 &&
          homes.map((home) => (
            <div key={home?._id} className=" rounded-lg relative homeCard">
              <img
                className=" aspect-square object-cover rounded-lg"
                src={home.photo}
                alt=""
              />

              <div className="homeCardDtls absolute w-full  text-white p-2 bg-gradient-to-r from-primary to-secondary">
                <div className="">
                  <h2 className="text-2xl font-semibold">{home?.title}</h2>
                </div>

                <div className="flex justify-between ">
                  <div className="flex gap-1">
                    <IoLocationSharp className="mt-1" />
                    <p>Location: {home?.location}</p>
                  </div>

                  <div className="flex gap-1 font-bold">
                    <ImPriceTags className="mt-1" />
                    <p>Price: {home?.price}</p>
                  </div>
                </div>

                <div className="flex justify-between mt-1 ">
                  <div className="flex justify-start gap-5">
                    <div className="flex gap-2">
                      <MdBedroomChild className="mt-1" />
                      <p>{home?.bedRoom} Bed</p>
                    </div>

                    <div className="flex gap-2 ">
                      <MdBedroomChild className="mt-1" />
                      <p>{home?.bathRoom} Bath</p>
                    </div>
                  </div>

                  <Link to={`/homedetails/${home._id}`}>
                    <button
                      className="btn btn-warning btn-sm text-white"
                      type="">
                      {" "}
                      <MdOutlineDetails className="mr-1" /> View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
