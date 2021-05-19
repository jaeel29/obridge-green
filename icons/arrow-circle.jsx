function ArrowCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 51 51"
    >
      <g stroke="#7CD6C8" strokeWidth="2" filter="url(#filter0_d)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.242 21.25l4.695 4.695-4.695 4.695"
        ></path>
        <rect width="28" height="28" x="7.59" y="11.944" rx="14"></rect>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="50"
          height="50"
          x="0.59"
          y="0.944"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="4"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default ArrowCircle;
