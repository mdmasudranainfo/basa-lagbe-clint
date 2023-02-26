import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ImPriceTags } from "react-icons/im";
import { useForm } from "react-hook-form";
import { BiSend } from "react-icons/bi";
import { AuthContext } from "../../../Context/UserContext";
import { toast } from "react-hot-toast";

const EachHomeDetails = () => {
  const details = useLoaderData();
  console.log(details);

  const { user } = useContext(AuthContext);
  // console.log(user?.email, user?.displayName);
  const name = user?.displayName;
  const email = user?.email;

  const { photo, _id, title } = details;

  // const time = new Date().toLocaleTimeString();
  const date = new Date().toDateString();
  const timeDate = `${date}`;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // handle booking function.................................................................
  const handleForm = (data) => {
    console.log("form", data);
    const booking = {
      customerName: name,
      customerEmail: email,
      customerPhone: data.phone,
      customerTransactionId: data.transaction,
      customerPaymentNumber: data.paymentNumber,
      customerMessage: data.yourMessage,
      bookingHouse: _id,
      houseTitle: title,
      housePhoto: photo,
      bookingTime: timeDate,
      sellerEmail: details?.sellerEmail,
    };
    fetch(" http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Booking SuccessFul");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // handle review function.......................................................
  function handleReview(event) {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const review = {
      photo,
      message,
      name,
      email,
      homeId: _id,
      title,
      timeDate,
    };

    fetch(" http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review Added");
        form.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  return (
    <div className="container mx-auto">
      <div className="text-center bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 py-14">
        <h2 className="text-4xl font-bold text-white">{details.title}</h2>
        <h3 className="text-lg text-black font-bold">
          Details about this Home
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1  mt-20 bg-base-100 gap-10 ">
        <div>
          <img src={details.photo} alt="" />

          <div className="mt-10">
            <h1 className="text-4xl font-bold text-center">{details.title}</h1>
            <p className="mt-10 text-lg">
              <span className=" font-bold">About this Home: </span>
              {details.description}
            </p>
            <p className="mt-2 text-lg">
              {" "}
              <span className=" font-bold">Owner's Number:</span>{" "}
              {details.number}
            </p>

            <button className="btn bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 mt-5 mb-10 text-white">
              <span className="pr-2">
                <ImPriceTags size="20px" />
              </span>
              Price: {details.price} /=
            </button>

            <div className="">
              <div className="text-lg">
                <p className="font-bold">Address & Area: {details.location}</p>
                <p>BedRooms: {details.bedRoom}</p>
                <p>BathRooms: {details.bathRoom}</p>
              </div>
            </div>

            <div className="pt-5 text-lg">
              <h2 className=" font-bold">Indoor Features</h2>

              <p>Gas: {details?.gas && <span>Yes</span>}</p>

              <p>Water: {details?.watter && <span>Yes</span>}</p>

              <p>Electricity: {details?.electricity && <span>Yes</span>}</p>

              <p>Internet: {details?.Internet && <span>Yes</span>}</p>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-center font-bold text-2xl">Book This House</h1>

          <form onSubmit={handleSubmit(handleForm)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                className="input input-bordered w-full"
                defaultValue={name}
                disabled
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="Email"
                {...register("email")}
                className="input input-bordered w-full"
                defaultValue={email}
                disabled
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                {...register("phone", { required: "Name is required" })}
                placeholder="Enter Your Name"
                className="input input-bordered w-full "
              />
              {errors.name && (
                <p className="text-red-500" role="alert">
                  {" "}
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Transaction ID</span>
              </label>
              <input
                type="text"
                {...register("transaction", { required: "Name is required" })}
                placeholder="Enter Your Name"
                className="input input-bordered w-full "
              />
              {errors.name && (
                <p className="text-red-500" role="alert">
                  {" "}
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Payment Number</span>
              </label>
              <input
                type="number"
                {...register("paymentNumber", { required: "Name is required" })}
                placeholder="Enter Your Name"
                className="input input-bordered w-full "
              />
              {errors.name && (
                <p className="text-red-500" role="alert">
                  {" "}
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <input
                type="text"
                {...register("yourMessage")}
                placeholder="Enter Your Name"
                className="input input-bordered w-full "
              />
              {errors.name && (
                <p className="text-red-500" role="alert">
                  {" "}
                  {errors.name?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 mt-5 mb-10 text-white w-full"
            >
              Request Booking
              <span className="pl-2">
                <BiSend size="20px" />
              </span>
            </button>
          </form>
        </div>
      </div>

      <hr className="mt-5" />

      {/* add review section______________________________________ */}

      <div className=" mt-14 bg-base-100 text-center ">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-800">
          Do you Want To Add Any Review_?
        </h1>
        <p className="mt-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-800">
          Your Review is so much Important fou Us
        </p>

        <p className="mt-5 mb-2 font-bold">Write Your Review</p>

        <form onSubmit={handleReview}>
          <textarea
            className="textarea textarea-info lg:w-2/5 w-full"
            placeholder="Write Your Review"
            name="message"
            required
          ></textarea>{" "}
          <br />
          <button
            type="submit"
            className="btn bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 mt-5 mb-10 text-white "
          >
            Submit
            <span className="pl-2">
              <BiSend size="20px" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EachHomeDetails;
