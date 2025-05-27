import { useForm, type SubmitHandler } from "react-hook-form";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  type: string[];
  message: string;
  contacted: true;
};
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
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
              }`}
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
              } `}
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
            }`}
          />{" "}
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className=" w-full h-24 mb-6">
          <h1>Query Type</h1>
          <div className=" mt-4 w-full flex">
            <label className="w-6/12  mr-4 py-3 pl-6 rounded-xl border border-grey200">
              <input
                type="radio"
                value="general"
                {...register("type", {
                  required: "please select a query type",
                })}
                className="mr-4"
              />
              General Enquiry
            </label>

            <label className="w-6/12 ml-4 py-3 pl-6 rounded-xl border border-grey200">
              <input
                type="radio"
                value="support"
                {...register("type", {
                  required: "please select a query type",
                })}
                className="mr-4"
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
          <input
            type="text"
            {...register("message", { required: "this field is required" })}
            className={`w-full h-24 rounded-xl mt-3 border border-grey200 border-solid ${
              errors.email ? "border-red-500" : "border-grey200"
            }`}
          />{" "}
          {errors.message && (
            <div className="text-red-500">{errors.message.message}</div>
          )}
        </div>

        <label>
          <input
            type="checkbox"
            {...register("contacted", {
              required:
                "To submit this form, please consent to being contacted",
            })}
            className="mr-2"
          />{" "}
          I consent to being contacted by team
        </label>
        {errors.contacted && (
          <div className="text-red-500">{errors.contacted.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="mt-6 bg-green600 text-white w-full py-4 rounded-xl "
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
