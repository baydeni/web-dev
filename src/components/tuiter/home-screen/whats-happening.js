import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./whats-happening.css";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({
      type: "create-tuit",
      tuit: whatsHappening,
    });
  };
  return (
    <>
      <div className="row pb-2">
        <div className="col-1">
          <img
            className="img img-responsive rounded-circle ms-2"
            width="48px"
            height="48px"
            src="/tuiter/images/spacex.jpg"
            alt=""
          />
        </div>
        <div className="col-10 tweet-no-photo">
          <textarea
            placeholder="What's happening?"
            value={whatsHappening}
            onChange={(event) => setWhatsHappening(event.target.value)}
          ></textarea>
          <hr className="m-2" />
          <div>
            <i className="mx-2 far fa-image wd-blue"></i>
            <i className="mx-2 fas fa-chart-line wd-blue"></i>
            <i className="mx-2 far fa-smile wd-blue"></i>
            <i className="mx-2 far fa-calendar wd-blue"></i>
            <button
              onClick={tuitClickHandler}
              className="btn btn-primary float-end rounded-pill"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhatsHappening;
