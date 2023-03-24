import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";

const ResetPassword = () => {
  const { forgetPass } = useContext(AuthContext);

  const resetHandler = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    forgetPass(email)
      .then(toast.success("Please check your email"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="container mx-auto mt-20">
      <form onSubmit={resetHandler}>
        <div className="text-center">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>

        <div className="text-center mt-2 text-white">
          <button className="btn btn-accent">
            Get reset code in your email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
