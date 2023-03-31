import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const MyHomesSl = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        `https://basabhara-server-mdmasudranainfo.vercel.app/allbooking/${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

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
              <th>House Name & Image</th>
              <th>Buyer Name & Email</th>
              <th>Buyer Number</th>
              <th>Buyer Transaction ID</th>
              <th>Buyer Payment Number</th>
              <th>Buyer Message</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booking?.housePhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking?.houseTitle}</div>
                      {/* <div className="text-sm opacity-50">{home?.price}</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {booking?.customerName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {booking?.customerEmail}
                  </span>
                </td>
                <td>{booking?.customerPhone}</td>
                <td>{booking?.customerTransactionId}</td>
                <td>{booking?.customerPaymentNumber}</td>
                {/* <td>{booking?.customerMessage}</td> */}
                <td>
                  {" "}
                  {booking?.paid ? (
                    <span className="ml-1">Paid</span>
                  ) : (
                    <span className="ml-1">UnPaid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyHomesSl;
