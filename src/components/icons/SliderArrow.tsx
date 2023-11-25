import { useState } from "react";



function IconSliderArrow({props}:any, ) {
  const [fill, setFill] = useState("#E64C8F")
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      height="50vh"
      width="5vw"
      style={{...props}}
      onMouseEnter={() => setFill("#e67ea9")}
      onMouseLeave={() => setFill("#E64C8F")}
    >
      <path d="M18.464 2.114a.998.998 0 00-1.033.063l-13 9a1.003 1.003 0 000 1.645l13 9A1 1 0 0019 21V3a1 1 0 00-.536-.886zM17 19.091L6.757 12 17 4.909v14.182z" />
    </svg>
  );
}

export default IconSliderArrow;
