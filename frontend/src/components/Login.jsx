import { useState } from "react";
import { Link  } from "react-router-dom";

 
const Login = () => {
    const [logData , setLogData] = useState({
        email:'',
        password:''
    })
    
    const handleChange = (e) => {
         const {name , value} = e.target
         setLogData((prevstate) => ({
            ...prevstate,
            [name]:value
         }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(logData)
    }
  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700 p-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={logData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 p-2">
              Password
            </label>
            <input
            value={logData.password}
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              autoComplete="password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            
            <Link to='/signup' className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
