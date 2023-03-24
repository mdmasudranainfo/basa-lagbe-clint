import React from "react";

import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://basabhara-server-mdmasudranainfo.vercel.app/users").then(
        (res) => res.json()
      ),
  });

  //

  //

  const AdminHandler = (id) => {
    console.log(id);
    const agree = window.confirm("Are you sure you want to Approve?");
    if (agree) {
      fetch(`https://basabhara-server-mdmasudranainfo.vercel.app/admin/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            console.log(data);
            toast.success("Successful");
            refetch();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  //

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
              <th>Action</th>
              {/*              
              <th>Favorite Color</th> */}
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>

                <td>
                  <button
                    disabled={user?.userType == "admin"}
                    onClick={() => AdminHandler(user?._id)}
                    className="btn btn-sm btn-warning"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
