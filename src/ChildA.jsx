// import React from "react";
// import { data } from "./App";

// const ChildA = () => {
//   return (
//     <>
//       <data.Consumer>
//         {(value) => {
//           return (
//             <>
//               <h1>{value}</h1>
//             </>
//           );
//         }}
//       </data.Consumer>
//     </>
//   );
// };

// export default ChildA;

import React, { useContext } from "react";
import { data, data2 } from "./App";

const ChildA = () => {
  const name = useContext(data);
  const gender = useContext(data2);
  return (
    <>
      <h1>{name}</h1>
      <h1>{gender}</h1>
    </>
  );
};

export default ChildA;
