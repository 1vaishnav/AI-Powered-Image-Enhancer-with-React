import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // You can navigate to home/dashboard here after login
    } catch (error) {
      setErrorMsg("Invalid email or password. Please try again.");
    }
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full max-w-4xl">
            <div className="rounded-lg bg-white shadow-lg dark:bg-neutral-800 flex flex-col lg:flex-row overflow-hidden">
              {/* Left column */}
              <div className="w-full lg:w-1/2 p-8 md:p-12">
                <div className="text-center mb-8">
                  <img
                    className="mx-auto w-40"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h4 className="text-xl font-semibold mt-4">
                    Welcome to AI Image Enhancer
                  </h4>
                </div>

                <form onSubmit={handleSubmit}>
                  <p className="mb-4 text-center">Please login to your account</p>

                  {errorMsg && (
                    <div className="mb-4 text-sm text-red-500 text-center">
                      {errorMsg}
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 text-white font-semibold rounded-md shadow-md"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    Log in
                  </button>

                  <div className="text-sm text-center text-blue-500 mt-4">
                    <Link to="/forgot-password">Forgot password?</Link>
                  </div>

                  <div className="text-sm mt-6 flex justify-center items-center gap-2">
                    <span>Don’t have an account?</span>
                    <Link to="/register">
                      <button
                        type="button"
                        className="text-danger border border-danger rounded px-4 py-1 hover:bg-neutral-100 transition"
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                </form>
              </div>

              {/* Right column */}
              <div
                className="w-full lg:w-1/2 flex items-center justify-center px-6 py-8 text-white"
                style={{
                  background:
                    "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                }}
              >
                <div className="max-w-md text-center">
                  <h4 className="text-xl font-semibold mb-4">
                    We are more than just a tool
                  </h4>
                  <p className="text-sm">
                    Enhance your images with the power of AI. Experience automatic
                    quality improvement, noise reduction, and real-time preview. All in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
