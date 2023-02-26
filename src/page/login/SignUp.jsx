import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
// import bg_svg from '../../asect/bg-svg/16921580449449347440.jpg'
import bg_svg from "../../asect/bg-svg/registraton-img.svg";
import { AuthContext } from "../../Context/UserContext";
const SignUp = () => {
  const { singUp, user, updateUser } = useContext(AuthContext);

  const regHandler = (event) => {
    event.preventDefault();

    const from = event.target;
    const first_name = from.first_name.value;
    const last_name = from.last_name.value;
    const email = from.email.value;
    const phone = from.phoneNumber.value;
    const password = from.password.value;
    const confirm_password = from.confirm_password.value;
    const fullName = first_name + last_name;

    const userInfo = {
      name: first_name + " " + last_name,
      email,
      phone,
      userType: "user",
    };

    singUp(email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;

        // post backend start

        fetch(" http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Register Success");
              from.reset();
            }
          });

        // post backend end

        // update User
        updateUser(fullName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.log(error);

        // ..
      });
  };

  return (
    <div className="px-4" style={{ backgroundImage: `url(${bg_svg})` }}>
      <div
        className={`md:w-1/2 md:min-w-[650px] mx-auto shadow-xl p-8 mt-10 rounded-lg bg-white`}
      >
        <h1 className="text-center  mb-4 text-3xl text-primary font-semibold">
          Registration for User
        </h1>
        <form onSubmit={regHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="f_name" className="text-xl font-medium">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                name="first_name"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black "
              />
            </div>

            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="l_name" className="text-xl font-medium">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                name="last_name"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
          </div>

          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Your Number"
              name="phoneNumber"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
          </div>
          <div className="flex justify-center mt-5 pb-5">
            <button className="text-center w-full border border-primary hover:border-primary hover:bg-transparent hover:text-primary  px-10 bg-primary text-white transition-all py-2 text-xl font-medium rounded">
              Register
            </button>
          </div>
        </form>
        <p>
          Already Have An Account?{" "}
          <span className="text-orange-500">
            <Link to="/login">Login Here</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
