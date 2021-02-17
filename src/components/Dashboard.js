// import React, { useMemo, useState, useEffect } from "react";
// import { useTable } from "react-table";
// import { COLUMNS } from "./Columns";
// import db from "data/db.json";
// import "./table.css";

// export default function Dashboard() {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => db, []);

//   const tableInstance = useTable({
//     columns,
//     data,
//   });

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = tableInstance;

//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//             ))}
//           </tr>
//         ))}
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </thead>
//     </table>
//   );
// }
