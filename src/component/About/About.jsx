import React from "react";

import img1 from "../../asect/Picture/Md Hasan Ali.jfif";
import img2 from "../../asect/Picture/Md Taiabur Rahman .jfif";
import img3 from "../../asect/Picture/Md.Al Amin Mollah .jfif";
import img4 from "../../asect/Picture/Rakib Chowdhury.jfif";
import img5 from "../../asect/Picture/Sabbir Hossain.jpg";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 py-14">
        <h2 className="text-4xl font-bold text-white">About</h2>
        <h3 className="text-lg text-black font-bold">About Our Company</h3>
      </div>

      <h1 className="text-center mt-14 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-800">
        Why Choose Us?
      </h1>
      <p className="text-center text-lg mt-2">
        Best offers from the house chef
      </p>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-10 gap-10">
        <div className="flex justify-center">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-800">
            Best Rent <br /> Service enjoy <br /> your life
          </h1>
        </div>

        <div>
          <h1 className="text-lg">
            Welcome to Baribhara. Baribhara was founded in 2016 by Team Member.
            Baribhara is an online-based effort to solve all the problems like
            Family, Bachelor, Office , Hostel, Sublet, Mess related to rent and
            which is also working as a part of the conviction to build a Digital
            Bangladesh. This company wants to give BANGLADESH a proper system to
            have house rent solution in digital way, without any broker issues.
            By using The Baribhara, you can find
            family-home/bachelor-home/office/hostel/sublet/mess in different
            parts of Bangladesh from anywhere in the world. By paying attention
            to the time and saving the cost, the landlord can easily get the
            tenant and the tenant will find the house he likes. You can publish
            the house rent advertisement in any area or region of Bangladesh. By
            using Baribhara every street and house wall will be free of
            leaflets. To rent or find your house, please login/register for
            free. To make the way easy use the app system, install the Baribhara
            app from Google Play Store. To install the Baribhara app, visit
            Google Play Store and search by typing "Baribhara". You can also
            install the Baribhara app by clicking on the link below:
          </h1>
        </div>
      </div>

      <p className="text-center mt-14 mb-10 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-800">
        Our Teams
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
        <div className="card  glass">
          <figure>
            <img src={img1} alt="car!" className="w-full h-96" />
          </figure>
          <div className="card-body">
            <h2 className="btn btn-outline btn-primary text-center font-bold text-2xl">
              Md. Hasan Ali
            </h2>
            <p className="text-center">ID: CSE1902017085</p>
            <p className="text-center">Section :17A</p>
          </div>
        </div>

        <div className="card  glass">
          <figure>
            <img src={img2} alt="car!" className="w-full h-96" />
          </figure>
          <div className="card-body">
            <h2 className="btn btn-outline btn-primary text-center font-bold text-2xl">
              {" "}
              Md Taiabur Rahman{" "}
            </h2>
            <p className="text-center">ID: CSE1902017075</p>
            <p className="text-center">Section: 17A</p>
          </div>
        </div>

        <div className="card  glass">
          <figure>
            <img src={img3} alt="car!" className="w-full h-96" />
          </figure>
          <div className="card-body">
            <h2 className="btn btn-outline btn-primary text-center font-bold text-2xl">
              Md.Al Amin Mollah{" "}
            </h2>
            <p className="text-center">Id:CSE 1702011015</p>
            <p className="text-center">Section: </p>
          </div>
        </div>

        <div className="card  glass">
          <figure>
            <img src={img4} alt="car!" className="w-full h-96" />
          </figure>
          <div className="card-body">
            <h2 className="btn btn-outline btn-primary text-center font-bold text-2xl">
              Rakib Chowdhury
            </h2>
            <p className="text-center">ID: CSE1901016168</p>
            <p className="text-center">Section :17A</p>
          </div>
        </div>

        <div className="card  glass">
          <figure>
            <img src={img5} alt="car!" className="w-full h-96" />
          </figure>
          <div className="card-body">
            <h2 className="btn btn-outline btn-primary text-center font-bold text-2xl">
              Sabbir Hossain
            </h2>
            <p className="text-center">ID: CSE1902017083</p>
            <p className="text-center">Section : 17a</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
