import React, { useEffect, useState } from "react";
import axios from "axios";

export default function IssueDetails() {
  const [issue, setIssue] = useState([]);

  function getIssueDetails() {
    const token = JSON.parse(localStorage.getItem("token"));

    const header = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .get("http://localhost:3000/api/issues/all?limit=10", header)
      .then((res) => {
        console.log(res.data);
        setIssue(res.data.data.issues);
        console.log(issue);
      })
      .catch((err) => {
        console.log("Login failed", err);
      });
  }

  return (
    <div>
      <button onClick={getIssueDetails} className="hover:bg-blue-400">
        click me
      </button>
      <p>Issues:</p>

      {issue.map((item, index) => (
        <div>
          {" "}
          <div className="border p-2 m-[300px] mb-0 mt-[20px]  ">
            <p>
              <strong>{item.title} </strong>
            </p>
            <p key={index} className="charLen">
              Des : {item.description}
            </p>
            <div className="d-flex">
              {item.images.map((img, index) => (
                <div className="p-[10px] ">
                  <img key={index} src={img} className="h-[10rem]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
