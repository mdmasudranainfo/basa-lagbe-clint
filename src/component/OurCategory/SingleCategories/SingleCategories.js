import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdBedroomChild, MdBathroom, MdOutlineDetails } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";

const SingleCategories = () => {
  // const basas = useLoaderData();
  // console.log(basas);

  const params = useParams();

  const { data: homes = [] } = useQuery({
    queryKey: ["homes"],
    queryFn: async () => {
      const res = await fetch(
        `https://basabhara-server-mdmasudranainfo.vercel.app/homes/${params.category}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1 mt-10">
        {homes.map((home) => (
          <div className=" rounded-lg relative homeCard">
            <img
              className="aspect-square object-cover rounded-lg"
              src={home?.photo}
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
                    <p>{home?.bedRoom} BedRooms</p>
                  </div>

                  <div className="flex gap-2 ">
                    <MdBedroomChild className="mt-1" />
                    <p>{home?.bathRoom} BthRooms</p>
                  </div>
                </div>

                <Link to={`/homedetails/${home._id}`}>
                  <button className="btn btn-warning btn-sm text-white" type="">
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

export default SingleCategories;
