import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import toast from "react-hot-toast";

const BookingForSeller = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        `https://basabhara-server-mdmasudranainfo.vercel.app/booking/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);

  const reportHandelar = (id) => {
    const agree = window.confirm("Are you sure you want to report this");
    if (agree) {
      fetch(
        `https://basabhara-server-mdmasudranainfo.vercel.app/report/${id}`,
        {
          method: "PUT",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Successfully Report");
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
                  <button
                    disabled={booking?.report}
                    onClick={() => reportHandelar(booking?._id)}
                    className="btn btn-sm "
                  >
                    Report
                  </button>
                  <button className="btn btn-sm ml-1">Confirm</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingForSeller;
