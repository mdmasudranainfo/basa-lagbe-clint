import React from "react";
import { useForm } from "react-hook-form";

const SellerRequest = () => {



const {register , handleSubmit, formState: {errors}} = useForm(); 




const handleSellerRequest = data => {
  
    console.log(data);
}



  return (
    <div className="px-4">
      <div
        className={`md:w-1/2 md:min-w-[650px] mx-auto  p-8 mt-10 rounded-lg bg-white`}
      >
        <h1 className="  mb-4 text-3xl text-primary font-semibold">
          Request For Seller Account
        </h1>
        <form onSubmit={handleSubmit(handleSellerRequest)}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="f_name" className="text-xl font-medium">
                First Name
              </label>
              <input

                type="name" {...register ('f_name', {required:'Name is required'})}
               
                placeholder="Enter Your First Name"
                
               
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black "
              />
              {errors.f_name &&  <p className='text-red-500'>{errors.f_name?.message}</p>  }
            </div>

            <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="l_name" className="text-xl font-medium">
                Last name
              </label>
              <input
                type="name" {...register ('l_name', {required:'Name is required'})}
                placeholder="Enter Your Last Name"
                
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
              {errors.l_name &&  <p className='text-red-500'>{errors.l_name?.message}</p>  }
            </div>
          </div>

          <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="location" className="text-xl font-medium">
              Location
            </label>
            <input
              type="text" {...register ('location', {required:'Location is required'})}
              placeholder="Enter Your Location"
              
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
            {errors.location &&  <p className='text-red-500'>{errors.location?.message}</p>  }
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="phone_Number" className="text-xl font-medium">
                Phone Number
              </label>
              <input
                type="number" {...register ('p_number', {required:'Phone Number is required'})}
                placeholder="Enter Your Phone Number"
               
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
              {errors.p_number &&  <p className='text-red-500'>{errors.p_number?.message}</p>  }
            </div>

            <div>
              <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
                <label htmlFor="photo" className="text-xl font-medium">
                  Upload Your Photo
                </label>
                <input
                  type="file" {...register ('photo', {required:'Photo is required'})}
                  placeholder=""
                  
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
                {/* {errors.photo &&  <p className='text-red-500'>{errors.photo?.message}</p>  } */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="nid_photo" className="text-xl font-medium">
                NID Card Photo
              </label>
              <input
                type="file" {...register ('nid_photo')}
                placeholder="Enter Your Password"
                
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
              {errors.nid_photo &&  <p className='text-red-500'>{errors.nid_photo?.message}</p>  }
            </div>
            <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="nid_number" className="text-xl font-medium">
                NID Number
              </label>
              <input
                type="number" {...register ('nid_number', {required:'NID Card is required'})}
                placeholder="Enter Your NID Number"
                
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
              {/* {errors.nid_number &&  <p className='text-red-500'>{errors.nid_number?.message}</p>  } */}
            </div>
          </div>

          <div className=" form-control rounded-lg flex flex-col gap-2 mb-4 mt-3 ">
            <label htmlFor="about" className="text-xl font-medium">
              Write Something About You_
            </label>
            <textarea
              type="text" {...register ('about')}
              placeholder="Enter Your description  "
             
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
            
          </div>

          <div className="flex justify-center mt-5 pb-5">
            <button className="text-center w-full border border-primary hover:border-primary hover:bg-transparent hover:text-primary  px-10 bg-primary text-white transition-all py-2 text-xl font-medium rounded" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerRequest;
