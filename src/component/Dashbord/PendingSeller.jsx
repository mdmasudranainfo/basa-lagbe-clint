import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const PendingSeller = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["pending"],
    queryFn: () =>
      fetch(" http://localhost:5000/pending").then((res) => res.json()),
  });

  // advertised seller...........................
  const approvedHandler = (id) => {
    console.log(id);
    const agree = window.confirm("Are you sure you want to Approve?");
    if (agree) {
      fetch(` http://localhost:5000/approved/${id}`, {
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
              <th>Approved User</th>
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
                  </a>{" "}
                  <a
                    className="btn btn-secondary btn-sm text-white"
                    target="blank"
                    href={user?.photo}
                  >
                    photo
                  </a>
                </td>
                <td>
                  <button
                    onClick={() => approvedHandler(user?._id)}
                    className="btn bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 mt-5 mb-10 text-white btn-sm"
                  >
                    approved
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

export default PendingSeller;
