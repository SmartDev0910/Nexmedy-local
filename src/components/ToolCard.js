import React from "react";

export default function ToolCard({ value }) {
  return (
    <>
      {value.map((i) => (
        <div
          key={i.t}
          className="toolCard flex justify-center w-[90%] sm:w-[45%] md:w-[30%]"
        >
          <div className="iconWrap">
            <i.i />
          </div>
          <div className="toolCardDesc">{i.t}</div>
        </div>
      ))}
    </>
  );
}
