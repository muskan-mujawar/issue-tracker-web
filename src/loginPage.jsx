import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    const data = { userId: userId, password: password };

    axios
      .post("http://localhost:3000/api/auth/login", data)
      .then((response) => {
        console.log("login successful", response.data);

        localStorage.setItem("token", JSON.stringify(response.data.token));

        navigate("/issueDetails");
      })
      .catch((err) => {
        alert("incorect credentials");
        console.log("Login failed", err);
      });
  }

  return (
    <div className=" bg-gradient-to-bl from-violet-500 to-fuchsia-500 ">
      <div className="container">
        <div className="border rounded-2xl p-[25px] back w-1/3 shadow-2xl bg-white">
          <p className="text-center mb-2 pb-4 pt-4 noto-sans-login text-2xl">
            Login
          </p>
          <div>
            {" "}
            <h6 className="mb-0">UserId</h6>
            <input
              className="mb-2 border rounded-[5px] ps-2 mt-1 w-full "
              type="text"
              name="UserId"
              placeholder="userId"
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div cl>
            <h6 className="mb-0 mt-1">Password</h6>
            <input
              className="border ps-2 mt-1 w-full rounded-[5px]"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full pb-4">
            <button
              onClick={handleClick}
              className="border rounded-[5px] w-full mt-4 bg-indigo-500 p-1"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
