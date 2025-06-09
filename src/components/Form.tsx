import { useForm, type SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import success from "../assets/images/icon-success-check.svg";
type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  type: string[];
  message: string;
  contacted: true;
};

function Form() {
  const notify = () =>
    toast(
      <div className="bg-grey600 w-full  text-white px-4 py-3 rounded-lg flex flex-col shadow-lg">
        <div className="flex items-center space-x-2">
          <img src={success} alt="success icon" />

          <p className="font-semibold">Message Sent!</p>
        </div>
        <p className="text-sm text-gray-200 mt-1 ">
          Thanks for completing the form. We'll be in touch soon!
        </p>
      </div>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        closeButton: false,
        theme: "light",
      }
    );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    notify();
    reset();
  };

  //   console.log(register("firstName", { required: "this field is required" }))
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full  px-10 pb-5"
    >
      <div>
        <div className="flex w-full mb-6">
          <div className="flex flex-col w-6/12 pr-4">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              {...register("firstName", { required: "this field is required" })}
              className={`w-full h-14 rounded-xl mt-3 border border-grey200 border-solid  ${
                errors.firstName ? "border-red-500" : "border-grey200"
              } pl-5 hover:border-green600 cursor-pointer focus:outline-none focus:border-green600`}
            />{" "}
            {errors.firstName && (
              <div className="text-red-500">{errors.firstName.message}</div>
            )}
          </div>
          <div className="flex flex-col w-6/12 pl-4">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              {...register("lastName", { required: "this field is required" })}
              className={`w-full h-14 rounded-xl mt-3 border border-grey200 border-solid  ${
                errors.lastName ? "border-red-500" : "border-grey200"
              } pl-5 hover:border-green600 cursor-pointer focus:outline-none focus:border-green600`}
            />{" "}
            {errors.lastName && (
              <div className="text-red-500">{errors.lastName.message}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            {...register("email", {
              required: "please enter a valid email address",
              //   pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              validate: (value) => value.includes("@"),
            })}
            className={`w-full h-14 rounded-xl mt-3 border border-grey200 border-solid  ${
              errors.email ? "border-red-500" : "border-grey200"
            } pl-5 hover:border-green600 cursor-pointer focus:outline-none focus:border-green600`}
          />{" "}
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className=" w-full h-24 mb-6">
          <h1>Query Type</h1>
          <div className=" mt-4 w-full flex">
            <label
              className=" 
            has-[:checked]:bg-green200 has-[:checked]:text-grey600 has-[:checked]:border-green600 
            flex items-center cursor-pointer w-6/12  mr-4 py-3 pl-6 rounded-xl border border-grey200"
            >
              <input
                type="radio"
                value="general"
                {...register("type", {
                  required: "please select a query type",
                })}
                className="mr-2 w-4 h-4 accent-green600"
              />
              General Enquiry
            </label>

            <label className="
             has-[:checked]:bg-green200 has-[:checked]:text-grey600 has-[:checked]:border-green600 
            cursor-pointer w-6/12 ml-4 py-3 pl-6 rounded-xl border border-grey200">
              <input
                type="radio"
                value="support"
                {...register("type", {
                  required: "please select a query type",
                })}
                className="mr-4 w-4 h-4 accent-green600"
              />
              Support Request
            </label>
          </div>
          {errors.type && (
            <div className="text-red-500">{errors.type.message}</div>
          )}
        </div>
<div className="flex flex-col mb-6">
  <label htmlFor="message">Message</label>
  <textarea
    {...register("message", { required: "this field is required" })}
    className={`w-full h-24 rounded-xl mt-3 border border-solid overflow-hidden
      ${errors.message ? "border-red-500" : "border-grey200"}
      px-5 py-3 hover:border-green600 cursor-pointer focus:outline-none focus:border-green600 resize-none`}
  />
  {errors.message && (
    <div className="text-red-500">{errors.message.message}</div>
  )}
</div>


        <label className="flex">
          <input
            className="mr-2 accent-green600 "
            type="checkbox"
            {...register("contacted", {
              required:
                "To submit this form, please consent to being contacted",
            })}
          />{" "}
          I consent to being contacted by team
        </label>
        {errors.contacted && (
          <div className="text-red-500">{errors.contacted.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="mt-6 bg-green600 text-white w-full py-4 rounded-xl hover:bg-[#0c3a00] cursor-pointer "
      >
        Submit
      </button>
      <ToastContainer toastClassName="bg-gray-700 text-white w-[410px] h-[100px] px-5 py-4 rounded-xl shadow-md flex flex-col justify-center" />
    </form>
  );
}

export default Form;
