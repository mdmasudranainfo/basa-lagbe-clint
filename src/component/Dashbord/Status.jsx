import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Status = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div
        className="hero h-screen"
        style={{
          backgroundImage: `url("https://mapartments.co.uk/uploads/transforms/b235c4646ab36ef9ae959de20fa459fc/11257/401_topRenders_b_7abbbb2796f27c91ef535646dc2c5299.webp")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hello {user?.displayName}
            </h1>
            <p className="mb-5">WELCOME TO BASA-BHARA.</p>
            <Link to="/">
              <button className="btn btn-primary">Back To Website</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
