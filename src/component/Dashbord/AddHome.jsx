import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";
import LoaderSpiinner from "../LoderSpinner/LoaderSpiinner";

const AddHome = () => {
  const [spinner, setSpinner] = useState(false);
  const { user } = useContext(AuthContext);
  const { data: categorys = [] } = useQuery({
    queryKey: ["categorys"],
    queryFn: () =>
      fetch(
        "https://basabhara-server-mdmasudranainfo.vercel.app/categories"
      ).then((res) => res.json()),
  });

  // location fetch
  const { data: locations = [] } = useQuery({
    queryKey: ["locations"],
    queryFn: () =>
      fetch(
        "https://basabhara-server-mdmasudranainfo.vercel.app/locations"
      ).then((res) => res.json()),
  });

  //
  const [gas, setGas] = useState(false);
  const [watter, setWatter] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [Internet, setInternet] = useState(false);
  const [expancive, setExpancive] = useState(false);

  const addHomeHandler = (event) => {
    event.preventDefault();
    setSpinner(true);
    const from = event.target;
    const title = from.title.value;
    const price = from.price.value;
    const location = from.location.value;
    const number = from.number.value;
    const category = from.category.value;
    const bedRoom = from.bed.value;
    const bathRoom = from.bath.value;
    const sit = from.sit.value;
    const duration = from.duration.value;
    const description = from.description.value;
    const image = from.photo.files[0];

    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?key=fd31eb1b7eccf01a95d0b1949fe0e46a";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const photo = imageData.data.url;
        const allInfo = {
          title,
          price,
          location,
          number,
          category,
          bedRoom,
          bathRoom,
          description,
          gas,
          watter,
          electricity,
          Internet,
          duration,
          sit,
          photo,
          expancive,
          sellerEmail: user?.email,
        };

        console.log(allInfo);
        savDatabase(allInfo, from);
      });
  };

  const savDatabase = (allInfo, from) => {
    fetch("https://basabhara-server-mdmasudranainfo.vercel.app/allbasa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Added!");
          setSpinner(false);
          from.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="px-4">
      <div
        className={`md:w-1/2 md:min-w-[650px] mx-auto  p-8 mt-10 rounded-lg bg-white`}
      >
        <h1 className="  mb-4 text-3xl text-primary font-semibold">
          Add Your Home
        </h1>

        <form onSubmit={addHomeHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="f_name" className="text-xl font-medium">
                Home Title
              </label>
              <input
                type="text"
                required
                placeholder="Enter Your Home Title"
                name="title"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black "
              />
            </div>

            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="l_name" className="text-xl font-medium">
                Price
              </label>
              <input
                type="number"
                required
                placeholder="Enter Home Price"
                name="price"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
          </div>

          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Location
            </label>
            <select
              required
              name="location"
              className="select w-full max-w-xs  select-bordered"
            >
              <option disabled selected>
                Select Location
              </option>
              {locations?.map((location) => (
                <option key={location?._id} value={location?.location}>
                  {location?.location}
                </option>
              ))}
            </select>
          </div>

          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Phone Number
            </label>
            <input
              type="text"
              required
              placeholder="Enter Your Number"
              name="number"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Photo (height: 400 , width:500)
              </label>
              <input
                type="file"
                required
                placeholder="Enter Your Password"
                name="photo"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Select Cetagory
              </label>
              <select
                required
                name="category"
                className="select w-full max-w-xs  select-bordered"
              >
                <option disabled selected>
                  Select category
                </option>
                {categorys.map((category) => (
                  <option key={category._id} value={category?.category}>
                    {category?.category}
                  </option>
                ))}
                {/* <option value="Homer">Home</option> */}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Bed Room
              </label>
              <select
                required
                name="bed"
                className="select w-full max-w-xs  select-bordered"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Bath Room
              </label>
              <select
                required
                name="bath"
                className="select w-full max-w-xs  select-bordered"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Duration (Optional)
              </label>
              <select
                name="duration"
                className="select w-full max-w-xs  select-bordered"
              >
                <option value="">Nane</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Sit (Optional)
              </label>
              <select
                name="sit"
                className="select w-full max-w-xs  select-bordered"
              >
                <option value="">Nane</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
          </div>

          {/* include service */}

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Gas
              </label>
              <input
                onChange={(event) => setGas(event.target.checked)}
                name="gas"
                type="checkbox"
                className="checkbox"
              />
            </div>
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Watter
              </label>
              <input
                onChange={(event) => setWatter(event.target.checked)}
                name="watter"
                type="checkbox"
                className="checkbox"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Electricity
              </label>
              <input
                onChange={(event) => setElectricity(event.target.checked)}
                name="electricity"
                type="checkbox"
                className="checkbox"
              />
            </div>
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Internet
              </label>
              <input
                onChange={(event) => setInternet(event.target.checked)}
                name="internet"
                type="checkbox"
                className="checkbox"
              />
            </div>

            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                this Home Is Expancive?
              </label>
              <input
                onChange={(event) => setExpancive(event.target.checked)}
                name="expancive"
                type="checkbox"
                className="checkbox"
              />
            </div>
          </div>

          {/*  */}

          <div className=" rounded-lg flex flex-col gap-2 mb-4 mt-3 ">
            <label htmlFor="email" className="text-xl font-medium">
              Description (minimum 20 words)
            </label>
            <textarea
              type="text"
              required
              placeholder="Enter Your Home description  "
              name="description"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>
          {spinner && <LoaderSpiinner />}

          <div className="flex justify-center mt-5 pb-5">
            <button className="text-center w-full border border-primary hover:border-primary hover:bg-transparent hover:text-primary  px-10 bg-primary text-white transition-all py-2 text-xl font-medium rounded">
              Add Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHome;

// make Masud Rana
