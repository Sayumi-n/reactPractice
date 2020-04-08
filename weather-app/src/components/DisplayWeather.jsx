import React from "react";

export default function DisplayWeather({ result }) {
  const { weather, main, wind } = result;
  console.log(result);
  return (
    <>
      <div className="">
        <div className="">
          {/* <img
            src={image_url}
            alt=""
            className=""
            style={{ height: "14rem" }}
          /> */}
          <div className="">
            {/* <h6>{title}</h6> */}
            <h6 className="">Provided by: {main}</h6>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
