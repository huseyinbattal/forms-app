import { useState } from "react";
function App() {
  const [formModel, setFormModel] = useState({
    userName: "",
    userPassword:"",
  });

  const [formErrorModel, setFormErrorModel] = useState({
    userName: false,
    userPassword:false,
  })

  const onChange = (value,field) => {
    setFormErrorModel({
      ...formModel,
      [field]: value
  })
}

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-400">
       <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-gray-800 text-sm font-bold mb-4"
          >
            Kullanıcı adı <span className="text-red-500">*</span>
          </label>
            <input
              onChange={(e) => {
                onChange(e.target.value,'userName')
              }}
              value={formModel.userName}
            name="userName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600"
            />
            <p className="text-red-500 text-xs italic mt-3">Bu alan zorunludur</p>
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
                onChange(e.target.value,'userPassword')
              }}
              value={formModel.userPassword}
            name="password"
            type="password"
            placeholder="**********"
            className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-800 focus:outline-none focus:shadow-violet-600"
            />
            <p className="mt-3 text-red-500 text-xs italic">Bu alan zorunludur</p>
            
        </div>
        <div className="flex items-center justify-center">
          <button 
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm 
          cursor-pointer focus:outline-none focus:shadow-blue-500 py-2 px-4 rounded w-full"
          >
            Giriş
          </button>
        </div>
      </form>
    </div>
   </div>
  );
}

export default App;
