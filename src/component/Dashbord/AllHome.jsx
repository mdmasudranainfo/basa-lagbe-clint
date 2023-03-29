import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import React from "react";

const AllHome = () => {
  const { data: homes = [], refetch } = useQuery({
    queryKey: ["homes"],
    queryFn: () =>
      fetch("http://localhost:5000/allbasa").then((res) => res.json()),
  });
  // console.log(homes);

  const deleteHandler = (basa) => {
    const agree = window.confirm(`Are you sure  delete ${basa.title}`);

    if (agree) {
      fetch(`http://localhost:5000/delete/${basa?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            //
            //
            toast.success("Successfully Delete");
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name & Image</th>
              <th>Location & Type</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {homes.map((home, i) => (
              <tr key={home._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={home?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{home?.title}</div>
                      {/* <div className="text-sm opacity-50">{home?.price}</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {home?.location}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {home?.category}
                  </span>
                </td>
                <td>{home?.price}</td>
                <th>
                  <button
                    onClick={() => deleteHandler(home)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllHome;
