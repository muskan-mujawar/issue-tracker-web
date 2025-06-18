import React, { useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { FaRegThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Navbar from "./navbar";

export default function IssueDetails() {
  const navigate = useNavigate();
  const [issue, setIssue] = useState([]);
  const [userVotes, setUserVotes] = useState({});

  function getIssueDetails() {
    const token = JSON.parse(localStorage.getItem("token"));
    const header = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .get("http://localhost:3000/api/issues/all?limit=10", header)
      .then((res) => {
        setIssue(res.data.data.issues);
        console.log(res.data.data.issues);
      })
      .catch((err) => {
        console.log("Failed to fetch issues", err);
      });
  }

  function handleVote(index) {
    const updatedIssues = [...issue];
    updatedIssues[index].upvotes += 1;
    setUserVotes({ ...userVotes });
  }

  function handleNavigate(item) {
    navigate(`/mainPage/${item._id}`);
    console.log("heelo");
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <button
          onClick={getIssueDetails}
          className="border rounded-3xl bg-orange-600 p-[10px] hover:bg-orange-700"
        >
          Get Issues
        </button>
        {issue.length > 0 ? <p>issues:</p> : null}

        {issue.map((item, index) => (
          <div
            key={item._id}
            className="flex justify-center"
            onClick={handleNavigate}
          >
            <div className=" rounded-2xl d-flex m-4 w-[50em] shadow-lg h-[20em]">
              {/* <p>{issue._id}</p>*/}
              <div className="w-1/3 pe-2">
                {item.images && item.images.length > 0 ? (
                  <div>
                    <Carousel interval={null}>
                      {item.images.map((img, i) => (
                        <Carousel.Item key={i}>
                          <img
                            className="d-block w-100 h-[20em] border rounded-l-2xl"
                            src={img}
                            alt={`Image ${i}`}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                ) : (
                  <p className=" text-gray-500 text-center pt-[9em] pb-[9em]">
                    No images available.
                  </p>
                )}
              </div>

              <div className="w-2/3 p-4 pb-0">
                <h2 className="text-xl font-bold line-clamp-2">{item.title}</h2>
                <p className="line-clamp-3">Description: {item.description}</p>
                <div className="d-flex mt-[6em]">
                  <button
                    onClick={() => handleVote(index)}
                    className=" hover:bg-amber-100 focus:outline-amber-500 votes d-flex p-2"
                  >
                    <FaRegThumbsUp />
                    {item.upvotes}
                  </button>
                  <p className="mb-0 ms-2">💬 {item.commentsCount}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
