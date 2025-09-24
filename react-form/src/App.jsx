import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("form submitted", data);
  }

  return (
    <>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div>
            <label>First Name</label>
            <input
              className="ml-10 bg-zinc-700 text-amber-50 p-2 rounded"
              {...register("firstName")}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              className="ml-10 bg-zinc-700 text-amber-50 p-2 rounded"
              {...register("lastName")}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="mt-5 bg-blue-500 text-zinc-900 p-2 rounded hover:bg-blue-600 cursor-pointer pl-10 pr-10 active:scale-95 duration-200"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
