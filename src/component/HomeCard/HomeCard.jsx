import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdBedroomChild, MdBathroom, MdOutlineDetails } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";

const HomeCard = () => {
  const { data: expencives = [] } = useQuery({
    queryKey: ["expencive"],
    queryFn: () =>
      fetch(
        "https://basabhara-server-mdmasudranainfo.vercel.app/expensive"
      ).then((res) => res.json()),
  });
  console.log(expencives);
  return (
    <div id="expensive" className="container mx-auto ">
      <h2 className="text-6xl text-primary text-center font-semibold">
        Expensive Home
      </h2>

      <p className="text-lg text-primary text-center font-semibold mt-5 mb-5">
        FIND YOUR HOMES, FOR YOUR AVAILABILITY
      </p>

      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 mt-10">
        {expencives?.map((expencive) => (
          <div key={expencive?._id} className=" rounded-lg relative homeCard">
            <img
              className="aspect-square object-cover rounded-lg "
              src={expencive.photo}
              alt=""
            />

            <div className="homeCardDtls absolute w-full  text-white p-2 bg-gradient-to-r from-primary to-secondary">
              <div className="">
                <h2 className="text-2xl font-semibold">{expencive?.title}</h2>
              </div>

              <div className="flex justify-between ">
                <div className="flex gap-1">
                  <IoLocationSharp className="mt-1" />
                  <p>Location: {expencive?.location}</p>
                </div>

                <div className="flex gap-1 font-bold">
                  <ImPriceTags className="mt-1" />
                  <p>Price: {expencive?.price}</p>
                </div>
              </div>

              <div className="flex justify-between mt-1 ">
                <div className="flex justify-start gap-5">
                  <div className="flex gap-2">
                    <MdBedroomChild className="mt-1" />
                    <p>{expencive?.bedRoom} Bed</p>
                  </div>

                  <div className="flex gap-2 ">
                    <MdBedroomChild className="mt-1" />
                    <p>{expencive?.bathRoom} Bath</p>
                  </div>
                </div>

                <Link to={`/homedetails/${expencive._id}`}>
                  <button className="btn btn-warning btn-sm text-white" type="">
                    {" "}
                    <MdOutlineDetails className="mr-1" /> View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* <div className=" rounded-lg relative homeCard">
          <img
            className="w-full rounded-lg"
            src="https://toohotel.com/wp-content/uploads/2022/09/TOO_Hotel_Suite_Bathroom_Panoramique.jpg"
            alt=""
          />

          <div className="homeCardDtls absolute w-full  text-white p-2 bg-gradient-to-r from-primary to-secondary">
            <h2 className="text-xl">Titles</h2>
            <div className="flex justify-between">
              <p>Price: 878777</p>
              <p>Location: 44545454</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeCard;
