import { useState } from "react";
function App() {
  const [formState, setFormState] = useState([
    {
      field: "userName",
      hasError: false,
      label: "User Name",
      isRequired: false,
      type: "text",
      value: "",
    },

    {
      field: "userPassword",
      hasError: false,
      label: "Password",
      isRequired: true,
      type: "password",
      value: "",
    },
  ]);
  const [formModel, setFormModel] = useState({
    userName: "",
    userPassword: "",
  });

  const [formErrorModel, setFormErrorModel] = useState({
    userName: false,
    userPassword: false,
  });

  const onChange = (value, field) => {
    const stateCopy = [...formState];
    const findedIndex = formState.findIndex((item) => item.field === field);
    stateCopy[findedIndex].value = value;
    setFormState(stateCopy);
    // setFormModel({...formModel,[field]: value,});
  };

  const formValidation = (e) => {
    e.preventDefault();
    // const obj = {
    //   userName: formModel.userName.trim() === "",
    //   userPassword: formModel.userPassword.trim() === "",
    // };
    // setFormErrorModel(obj);
    // if (Object.values(obj).includes(true)) {
    //   alert("Error");
    //   return;
    // }
    const stateCopy = [...formState];
    const newArr = stateCopy.map((item) => {
      if (item.isRequired && item.value.trim() === "") {
        return {
          ...item,
          hasError: true,
        };
      }
      return item;
    });
    setFormState(newArr)
    //sendFormRequest();
  };

  const sendFormRequest = () => {
    setTimeout(() => {
      alert("Kullanıcı girişi başarılı");
    }, 2000);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-400">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={formValidation}
        >
          {formState.map((item) => {
            return (
              <div className="mb-4" key={item.field}>
                <label
                  htmlFor="userName"
                  className="block text-gray-800 text-sm font-bold mb-4"
                >
                  {item.label}{" "}
                  {item.isRequired && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={item.type}
                  onChange={(e) => {
                    onChange(e.target.value, item.field);
                  }}
                  value={item.value}
                  name={item.field}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600"
                />
                {item.hasError && (
                  <p className="text-red-500 text-xs italic mt-3">
                    This {item.field} is required!
                  </p>
                )}
              </div>
            );
          })}

          {/* <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-gray-800 text-sm font-bold mb-4"
            >
              Kullanıcı adı <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => {
                onChange(e.target.value, "userName");
              }}
              value={formModel.userName}
              name="userName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600"
            />
            {formErrorModel.userName && (
              <p className="text-red-500 text-xs italic mt-3">
                Bu alan zorunludur{" "}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-800 text-sm font-bold mb-4"
            >
              Parola <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => {
                onChange(e.target.value, "userPassword");
              }}
              value={formModel.userPassword}
              name="password"
              type="password"
              placeholder="**********"
              className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-800 focus:outline-none focus:shadow-violet-600"
            />
            {formErrorModel.userPassword && (
              <p className="text-red-500 text-xs italic mt-3">
                Bu alan zorunludur{" "}
              </p>
            )}
          </div> */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm 
          cursor-pointer focus:outline-none focus:shadow-blue-500 py-2 px-4 rounded w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
