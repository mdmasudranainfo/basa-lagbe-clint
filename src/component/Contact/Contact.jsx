import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BiSend } from "react-icons/bi";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  const sendEmail = (data) => {};

  return (
    <div className="container mx-auto">
      <div className="text-center bg-gradient-to-r from-secondary via-emerald-500 to-primary py-14">
        <h2 className="text-4xl font-bold text-white">Contact Us</h2>
        <h3 className="text-lg text-black font-bold">Contact With Us</h3>
      </div>

      <p className="text-center text-2xl mt-14 font-bold text-gray-500">
        Find Our Location
      </p>
      <h1 className="text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-800">
        Map & Directions
      </h1>
      <p className="text-center text-xl mt-7 mb-8 font-bold text-gray-600">
        Find out how to find us from your current location
      </p>

      <div>
        <GoogleMap></GoogleMap>
      </div>

      <h1 className="text-center mt-14 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-800">
        Contact us <br />
        live
      </h1>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-20 gap-10 justify-items-center">
        <div>
          <div className="flex gap-2">
            <FaAddressCard size={30} className="text-sky-900" />
            <h1 className="text-2xl font-bold text-sky-900">Address</h1>
          </div>

          <p className="font-bold text-lg text-gray-800">
            Headquarters : Green road, 152/2k,Dhaka{" "}
          </p>

          <div className="flex gap-2 mt-20">
            <GoMail size={30} className="text-sky-900" />
            <h1 className="text-2xl font-bold text-sky-900">Mail</h1>
          </div>

          <p className="font-bold text-lg text-gray-800">baribhara@gmail.com</p>

          <div className="flex gap-2 mt-20">
            <FaPhoneSquareAlt size={30} className="text-sky-900" />
            <h1 className="text-2xl font-bold text-sky-900">Call</h1>
          </div>

          <p className="font-bold text-lg text-gray-800">01306129103</p>

          <div className="flex gap-2 mt-20">
            <CgWebsite size={30} className="text-sky-900" />
            <h1 className="text-2xl font-bold text-sky-900">Website</h1>
          </div>

          <p className="font-bold text-lg text-gray-800">www.baribhara.com</p>
        </div>

        {/* form_div_______________________________________________________________________________ */}
        <div>
          <h1 className="text-center text-3xl font-semibold mb-2">
            Have a Question?
          </h1>
          <hr />
          <h2 className="text-2xl font-bold text-center mt-5 mb-5">
            Send Us a Email
          </h2>

          <div>
            {/* <h1 className='text-4xl font-bold text-yellow-400 mt-4 mb-3'>Send Message</h1> */}

            <form onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered input-warning w-3/4  mb-5 text-black"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered input-warning w-3/4 mb-5 text-black"
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                className="input input-bordered input-warning w-3/4  mb-5 text-black"
              />{" "}
              <br />
              <textarea
                className="textarea textarea-warning w-3/4 h-40 text-black mb-5"
                name="message"
                placeholder="Enter Your Message"
              ></textarea>{" "}
              <br />
              <hr />
              <button
                type="submit"
                className="btn bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 mt-5 mb-10 text-white"
              >
                Submit{" "}
                <span className="pl-2">
                  <BiSend size="20px" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
