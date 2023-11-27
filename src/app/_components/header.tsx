import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Header() {
  return (
    <header className="border-b bg-[#300171] p-3 shadow-md shadow-black">
      <MaxWidthWrapper>
        <div className="flex flex-row space-y-2 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <h1 className="flex-row text-white">Create</h1>
          <T3SVG />
          <span className="ml-2 bg-gradient-to-r from-[#cc66ff] to-red-600 bg-clip-text text-transparent">
            Idea
          </span>
        </div>
        <p className="ml-4 text-lg font-bold text-white">
          Your ideas, for Theo's next videos ❤️
        </p>
      </MaxWidthWrapper>
    </header>
  );
}

function T3SVG() {
  return (
    <svg
      viewBox="0 0 258 198"
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 fill-[#7b0eb2]"
    >
      <g transform="matrix(1,0,0,1,-0.465994,-0.972412)">
        <path d="M165.735,25.07L188.947,0.972L0.466,0.972L0.466,25.07L165.735,25.07Z"></path>
      </g>
      <g transform="matrix(1,0,0,1,-0.465994,-0.972412)">
        <path d="M163.981,96.324L254.022,3.683L221.206,3.683L145.617,80.761L163.981,96.324Z"></path>
      </g>
      <g transform="matrix(1,0,0,1,-0.465994,-0.972412)">
        <path d="M233.658,131.418C233.658,155.075 214.48,174.254 190.823,174.254C171.715,174.254 155.513,161.738 150,144.439L146.625,133.848L127.329,153.143L129.092,157.336C139.215,181.421 163.034,198.354 190.823,198.354C227.791,198.354 257.759,168.386 257.759,131.418C257.759,106.937 244.399,85.74 224.956,74.091L220.395,71.358L202.727,89.253L210.788,93.508C224.403,100.696 233.658,114.981 233.658,131.418Z"></path>
      </g>
      <g transform="matrix(1,0,0,1,-0.465994,-0.972412)">
        <path d="M88.263,192.669L88.263,45.646L64.165,45.646L64.165,192.669L88.263,192.669Z"></path>
      </g>
    </svg>
  );
}
