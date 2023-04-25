// import { useState } from "react";
// import { getFormdata, getTableColumns } from "@/functions";
// import DataTable from "react-data-table-component";

// export default function Forms() {
//   const forms = [
//     "Candidates",
//     "Clients",
//     "Feedback",
//     "Interviews",
//     "Recruiting",
//     "Submissions",
//     "Missing Rate",
//   ];
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <div
//       className="p-8 bg-formBack rounded-md shadow-sm flex flex-col gap-4 w-[100%]"
//       style={{ backdropFilter: "blur(5px)" }}
//     >
//       <div className="text-2xl font-bold">Form Submissions</div>
//       <div className=" flex gap-4 w-fit  ">
//         {forms.map((ele, idx) => {
//           if (idx === activeIndex) {
//             return (
//               <span
//                 key={idx}
//                 className="cursor-pointer border-b-2"
//                 onClick={() => {
//                   setActiveIndex(idx);
//                 }}
//               >
//                 {ele}
//               </span>
//             );
//           }
//           return (
//             <span
//               key={idx}
//               className="cursor-pointer text-unselectedText hover:text-white"
//               onClick={() => {
//                 setActiveIndex(idx);
//               }}
//             >
//               {ele}
//             </span>
//           );
//         })}
//       </div>
//       <DataTable
//         columns={getTableColumns(0)}
//         title={forms[activeIndex]}
//         data={getFormdata("Submissions")}
//         pagination
//       />
//     </div>
//   );
// }
