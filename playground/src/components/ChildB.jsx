// import React, { useContext } from "react";
// import { ChildBContext, ChangeThemeContext } from "../App";

// const ChildB = () => {
//   const childB = useContext(ChildBContext);
//   const { theme, setTheme } = useContext(ChangeThemeContext);

//   function toggleTheme() {
//     if (theme === "dark") {
//       setTheme("light");
//     } else {
//       setTheme("dark");
//     }
//   }

//   const colors =
//     theme === "dark" ? "text-white bg-black" : "text-black bg-white";

//   return (
//     <div>
//       <div className="border-2 border-dashed border-gray-500 p-5 justify-center items-center">
//         <div>{childB.name}</div>
//       </div>
//       <div className={colors}>
//         <button
//           className=" border-2  border-red-800  m-5  p-10 "
//           onClick={toggleTheme}
//         >
//           Change theme
//         </button>
//       </div>
//     </div>
//   );
// };
