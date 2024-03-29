import { FunctionComponent } from "react";

export const DotsIcon:FunctionComponent = () => {
  return (
    <svg
      className="h-8 w-8 text-black-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" />
    </svg>
  );
};

export const GenericIcon:FunctionComponent = () => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <style>{`.cls-1{fill:#d9e4e8;}.cls-2{opacity:0.14;}.cls-3{fill:#17292d;}.cls-4{fill:#79d3d3;}.cls-5{fill:#141f38;}`}</style>
      </defs>
      <title>code-filled</title>
      <path
        className="cls-1"
        d="M115.2,499.2A51.26,51.26,0,0,1,64,448V64a51.26,51.26,0,0,1,51.2-51.2H302L448,158.9V448a51.26,51.26,0,0,1-51.2,51.2Z"
      />
      <g className="cls-2">
        <path
          className="cls-3"
          d="M435.2,128h0L346.72,39.51A64,64,0,0,0,294.4,102.4V128a64,64,0,0,0,64,64h76.8Z"
        />
      </g>
      <path
        className="cls-4"
        d="M358.4,153.6a51.26,51.26,0,0,1-51.2-51.2V18.12L442.34,153.6Z"
      />
      <path
        className="cls-5"
        d="M307.34,0H115.2a64,64,0,0,0-64,64V448a64,64,0,0,0,64,64H396.8a64,64,0,0,0,64-64V153.6ZM411.49,140.8H358.4A38.44,38.44,0,0,1,320,102.4V49.08ZM435.2,448a38.44,38.44,0,0,1-38.4,38.4H115.2A38.44,38.44,0,0,1,76.8,448V64a38.44,38.44,0,0,1,38.4-38.4H294.4v76.8a64,64,0,0,0,64,64h76.8Z"
      />
      <path
        className="cls-5"
        d="M201.78,290.21,146.31,320.1c-4.17,2.49-5.51,4-5.51,8.47v8.3c0,4.48,1.33,5.81,5.51,8.3l55.47,30c5.18,2.66,7,1,7-5.15V358.61c0-7.14-1-8.47-6.18-11l-30.74-14.95v-.83l30.91-15.11c4.85-2.49,6-3.82,6-11V295.36C208.8,289.22,207,287.56,201.78,290.21Z"
      />
      <path
        className="cls-5"
        d="M287.49,268.8H274.12c-4.67,0-6.68,1.16-8.19,5.64L222.16,391.15c-1.33,4-.5,5.65,4,5.65h13.37c4.68,0,6.68-1.17,8.19-5.65L291.5,274.44C293,270.46,292,268.8,287.49,268.8Z"
      />
      <path
        className="cls-5"
        d="M303,295.2v11.29c0,7.14,1.17,8.47,6.35,11l30.74,14.95v.83l-30.91,15.11c-4.84,2.49-6.18,4.15-6.18,11v10.79c0,6,2.34,7.64,7.19,5l55.47-29.89c4.18-2.49,5.51-4.31,5.51-8.47v-8.3c0-4.15-1.34-5.81-5.51-8.3l-55.47-30C305.37,287.39,303,289.05,303,295.2Z"
      />
    </svg>
  );
};
