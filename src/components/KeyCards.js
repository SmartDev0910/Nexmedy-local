import React from "react";

export default function KeyCards({ value }) {
  return (
    <>
      {value.map((i) => (
        <div key={i.t} className="keyCard flex w-[90%] sm:w-[45%] md:w-[30%]">
          <div className="scrollText">{i.t}</div>
          <div className="descWrap">
            <h3 className="t-2">{i.t}</h3>
            <p>{i.d}</p>
          </div>
        </div>
      ))}
    </>
  );
}
