import React, { useState } from "react";
import { useAuth } from "../AuthContext";

export default function Register() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    try {
      await signup(email, password);
      setSuccessMsg("Account created successfully. You can now log in.");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setErrorMsg("Registration failed. Email might be in use.");
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
                    Create Your Account
                  </h4>
                </div>

                <form onSubmit={handleSubmit}>
                  <p className="mb-4 text-center">Register to use the app</p>

                  {errorMsg && (
                    <div className="mb-4 text-sm text-red-500 text-center">
                      {errorMsg}
                    </div>
                  )}
                  {successMsg && (
                    <div className="mb-4 text-sm text-green-500 text-center">
                      {successMsg}
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

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                    Register
                  </button>
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
                    Start Your AI Journey
                  </h4>
                  <p className="text-sm">
                    Create your account to enhance your images with the power of AI.
                    Quick. Accurate. Beautiful results.
                  </p>
                </div>
              </div>
              {/* End Right Column */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
