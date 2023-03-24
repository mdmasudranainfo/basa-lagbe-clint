import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSeller = () => {
  const { data: sellers = [] } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch("https://basabhara-server-mdmasudranainfo.vercel.app/seller").then(
        (res) => res.json()
      ),
  });
  console.log(sellers);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>location</th>

              <th>User Info</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td className="text-base">{user?.name}</td>
                <td className="text-base">{user?.email}</td>
                <td className="text-base">{user?.phone}</td>

                <td className="text-base">{user?.location}</td>
                <td>
                  <a
                    className="btn btn-secondary btn-sm text-white"
                    target="blank"
                    href={user?.nidPic}
                  >
                    nid
                  </a>
                  <a
                    className="btn btn-secondary btn-sm text-white"
                    target="blank"
                    href={user?.photo}
                  >
                    photo
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
