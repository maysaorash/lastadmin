// import React from "react";
// // import { FormControl, Form, Button } from "react-bootstrap";
// // import { ArrowUp, ArrowDown } from "react-bootstrap-icons";
// import VisibilityIcon from "@material-ui/icons/Visibility";


// export function MovieList({ className }) {
 

//   return (
//     <>
//     <div className="container">
//       <div className="card card-custom gutter-b">
//         <div className="card-header">
//           <div className="card-title">
//             <h3 className="card-label"><b>Movie Lists</b></h3>
//           </div>
//           <div className="card-toolbar">
//             <button type="submit" className="btn btn-primary">
//               Add Movie
//             </button>
//           </div>
//         </div>
//         <div className="card-body">
// {/*           
//           <form className="form form-label-right">
//             <div className="form-group row">

//               <div className="row-lg-2">
//                 <label >
//                   <b>Show:</b> 
//                 </label>
//                 <input type="number"/>
//                 <label><b>entries</b></label>
//               </div>
        
//              <div className="col-lg-2">
//               <label className="form-text ">
//                   <b>Search:</b> 
//                 </label>
//                 <input />
//               </div>
        
//             </div>
           
//           </form>
//      */}
//           <div className="row">
//             <div className="col-sm-12 col-md-6">
//               <div className="dataTables_length" id="DataTables_Table_0_length">
//                 <label><b>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="custom-select custom-select-sm form-control form-control-sm"><option value="3">3</option><option value="5">5</option><option value="10">10</option>
//                 </select> entries</b></label>
//               </div>
//               </div>
              
//           <div className="col-sm-12 col-md-6">
//               <div id="DataTables_Table_0_filter" className="dataTables_filter">
//                 <label>Search:
//                   <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_0" />
//               </label></div></div></div>

//           <div className="react-bootstrap-table table-responsive">
//             <table className="table table table-head-custom table-vertical-center overflow-hidden">
//               <thead>
//                 <tr>
                  
//                   <th
//                     tabIndex={0}
//                     aria-label="ID sort asc"
//                     className="sortable sortable-active"
//                   >
//                     NO
                    
//                     <span className="svg-icon svg-icon-sm svg-icon-primary ml-1">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Navigation / Up-2</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Navigation-/-Up-2"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
//                           <rect
//                             id="Rectangle"
//                             fill="#000000"
//                             opacity="0.3"
//                             x={11}
//                             y={10}
//                             width={2}
//                             height={10}
//                             rx={1}
//                           />
//                           <path
//                             d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
//                             id="Path-94"
//                             fill="#000000"
//                             fillRule="nonzero"
//                           />
//                         </g>
//                       </svg>
//                     </span>
                  
//                   </th>
//                   <th
//                     tabIndex={0}
//                     aria-label="Firstname sortable"
//                     className="sortable"
//                   >
//                     NAME

//                     <span className="svg-icon svg-icon-sm svg-icon-primary ml-1">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Navigation / Up-2</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Navigation-/-Up-2"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
//                           <rect
//                             id="Rectangle"
//                             fill="#000000"
//                             opacity="0.3"
//                             x={11}
//                             y={10}
//                             width={2}
//                             height={10}
//                             rx={1}
//                           />
//                           <path
//                             d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
//                             id="Path-94"
//                             fill="#000000"
//                             fillRule="nonzero"
//                           />
//                         </g>
//                       </svg>
//                     </span>

//                     {/* <ArrowUp/>
//                     <ArrowDown/> */}
// {/* 
//                     <span className="svg-icon svg-icon-sm svg-icon-primary ml-1">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Shopping / Sort1</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Shopping-/-Sort1"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <rect id="bound" x={0} y={0} width={24} height={24} />
//                           <rect
//                             id="Rectangle-8"
//                             fill="#000000"
//                             x={4}
//                             y={5}
//                             width={16}
//                             height={3}
//                             rx="1.5"
//                           />
//                           <path
//                             d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
//                             id="Combined-Shape"
//                             fill="#000000"
//                             opacity="0.3"
//                           />
//                         </g>
//                       </svg>
//                     </span>
//                    */}
//                   </th>
// {/*                   
//                   <th
//                     tabIndex={0}
//                     aria-label="Lastname sortable"
//                     className="sortable"
//                   >
//                     AUTHOR
//                     <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Shopping / Sort1</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Shopping-/-Sort1"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <rect id="bound" x={0} y={0} width={24} height={24} />
//                           <rect
//                             id="Rectangle-8"
//                             fill="#000000"
//                             x={4}
//                             y={5}
//                             width={16}
//                             height={3}
//                             rx="1.5"
//                           />
//                           <path
//                             d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
//                             id="Combined-Shape"
//                             fill="#000000"
//                             opacity="0.3"
//                           />
//                         </g>
//                       </svg>
//                     </span>
//                   </th>
//                   */}
//                   <th
//                     tabIndex={0}
//                     aria-label="Email sortable"
//                     className="sortable"
//                     style={{textAlign:"center"}}
//                   >
//                     Description

//                     <span className="svg-icon svg-icon-sm svg-icon-primary ml-1">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Navigation / Up-2</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Navigation-/-Up-2"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
//                           <rect
//                             id="Rectangle"
//                             fill="#000000"
//                             opacity="0.3"
//                             x={11}
//                             y={10}
//                             width={2}
//                             height={10}
//                             rx={1}
//                           />
//                           <path
//                             d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
//                             id="Path-94"
//                             fill="#000000"
//                             fillRule="nonzero"
//                           />
//                         </g>
//                       </svg>
//                     </span>

// {/* 
//                     <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Shopping / Sort1</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Shopping-/-Sort1"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <rect id="bound" x={0} y={0} width={24} height={24} />
//                           <rect
//                             id="Rectangle-8"
//                             fill="#000000"
//                             x={4}
//                             y={5}
//                             width={16}
//                             height={3}
//                             rx="1.5"
//                           />
//                           <path
//                             d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
//                             id="Combined-Shape"
//                             fill="#000000"
//                             opacity="0.3"
//                           />
//                         </g>
//                       </svg>
//                     </span>
//                   */}
//                   </th>
//                   <th tabIndex={0}>MOVIE
                  
//                   <span className="svg-icon svg-icon-sm svg-icon-primary ml-1">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Navigation / Up-2</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Navigation-/-Up-2"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
//                           <rect
//                             id="Rectangle"
//                             fill="#000000"
//                             opacity="0.3"
//                             x={11}
//                             y={10}
//                             width={2}
//                             height={10}
//                             rx={1}
//                           />
//                           <path
//                             d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
//                             id="Path-94"
//                             fill="#000000"
//                             fillRule="nonzero"
//                           />
//                         </g>
//                       </svg>
//                     </span>
//                   </th>

//                   {/* <th
//                     tabIndex={0}
//                     aria-label="Status sortable"
//                     className="sortable"
//                   >
//                     ACTION
//                     <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Shopping / Sort1</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Shopping-/-Sort1"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <rect id="bound" x={0} y={0} width={24} height={24} />
//                           <rect
//                             id="Rectangle-8"
//                             fill="#000000"
//                             x={4}
//                             y={5}
//                             width={16}
//                             height={3}
//                             rx="1.5"
//                           />
//                           <path
//                             d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
//                             id="Combined-Shape"
//                             fill="#000000"
//                             opacity="0.3"
//                           />
//                         </g>
//                       </svg>
//                     </span>
//                   </th>
//                   <th
//                     tabIndex={0}
//                     aria-label="Type sortable"
//                     className="sortable"
//                   >
//                     CategoryList
//                     <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Shopping / Sort1</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Shopping-/-Sort1"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <rect id="bound" x={0} y={0} width={24} height={24} />
//                           <rect
//                             id="Rectangle-8"
//                             fill="#000000"
//                             x={4}
//                             y={5}
//                             width={16}
//                             height={3}
//                             rx="1.5"
//                           />
//                           <path
//                             d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
//                             id="Combined-Shape"
//                             fill="#000000"
//                             opacity="0.3"
//                           />
//                         </g>
//                       </svg>
//                     </span>
//                   </th>
//                    */}
//                   <th tabIndex={0} className="text-right pr-3">
//                     ACTION
//                     <span className="svg-icon svg-icon-sm svg-icon-primary ml-1">
//                       <svg
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                       >
//                         <title>Stockholm-icons / Navigation / Up-2</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs />
//                         <g
//                           id="Stockholm-icons-/-Navigation-/-Up-2"
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
//                           <rect
//                             id="Rectangle"
//                             fill="#000000"
//                             opacity="0.3"
//                             x={11}
//                             y={10}
//                             width={2}
//                             height={10}
//                             rx={1}
//                           />
//                           <path
//                             d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
//                             id="Path-94"
//                             fill="#000000"
//                             fillRule="nonzero"
//                           />
//                         </g>
//                       </svg>
//                     </span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
                
//                   <td>1</td>
//                   <td>Sonni</td>
//                   {/* <td>Gabotti</td> */}
                  
//                   <td   style={{textAlign:"center"}}  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a...</td>
//                   <td>20</td>

//                   {/* <td>
//                     <span className="label label-lg label-light-danger label-inline">
//                       Suspended
//                     </span>
//                   </td> */}
//                   {/* <td>
//                     <span className="label label-dot label-primary mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-primary">Individual</span>
//                   </td> */}
                 
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
                
//                 </tr>
//                 <tr>
                
//                   <td>2</td>
//                   <td>Abie</td>
//                   {/* <td>Cowperthwaite</td> */}
//                   <td  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a...</td>
//                   <td>10</td>
//                   {/* <td>
//                     <span className="label label-lg label-light-success label-inline">
//                       Active
//                     </span>
//                   </td> */}
//                   {/* <td>
//                     <span className="label label-dot label-primary mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-primary">Individual</span>
//                   </td> */}
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
                 
//                   <td>3</td>
//                   <td>Melody</td>
//                   {/* <td>Stodd</td> */}
//                   <td  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a</td>
//                   <td>40</td>
//                   {/* <td>
//                     <span className="label label-lg label-light-danger label-inline">
//                       Suspended
//                     </span>
//                   </td>
//                   <td>
//                     <span className="label label-dot label-primary mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-primary">Individual</span>
//                   </td> */}
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
                
//                   <td>4</td>
//                   <td>Naomi</td>
//                   {/* <td>Galbreth</td> */}
//                   <td  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a...</td>
//                   <td>30</td>
//                   {/* <td>
//                     <span className="label label-lg label-light-info label-inline">
//                       Pending
//                     </span>
//                   </td>
//                   <td>
//                     <span className="label label-dot label-success mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-success">Business</span>
//                   </td> */}
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
                 
//                   <td>5</td>
//                   <td>Ashley</td>
//                   {/* <td>Jandl</td> */}
//                   <td  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a...</td>
//                   <td>20</td>
//                   {/* <td>
//                     <span className="label label-lg label-light-success label-inline">
//                       Active
//                     </span>
//                   </td>
//                   <td>
//                     <span className="label label-dot label-primary mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-primary">Individual</span>
//                   </td> */}
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
                 
//                   <td>6</td>
//                   <td>Mildrid</td>
//                   {/* <td>Duplan</td> */}
//                   <td  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a...</td>
//                   <td>10</td>
//                   {/* <td>
//                     <span className="label label-lg label-light-success label-inline">
//                       Active
//                     </span>
//                   </td>
//                   <td>
//                     <span className="label label-dot label-primary mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-primary">Individual</span>
//                   </td> */}
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
                 
//                   <td>7</td>
//                   <td>Dall</td>
//                   {/* <td>Stow</td> */}
//                   <td  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a...</td>
//                   <td>20</td>
//                   {/* <td>
//                     <span className="label label-lg label-light-info label-inline">
//                       Pending
//                     </span>
//                   </td>
//                   <td>
//                     <span className="label label-dot label-primary mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-primary">Individual</span>
//                   </td> */}
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
                 
//                   <td>8</td>
//                   <td>Burton</td>
//                   {/* <td>Dering</td> */}
//                   <td  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a..</td>
//                   <td>40</td>
//                   {/* <td>
//                     <span className="label label-lg label-light-success label-inline">
//                       Active
//                     </span>
//                   </td>
//                   <td>
//                     <span className="label label-dot label-success mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-success">Business</span>
//                   </td> */}
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
               
//                   <td>9</td>
//                   <td>Wolf</td>
//                   {/* <td>Blackaller</td> */}
//                   <td  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a...</td>
//                   <td>20</td>
//                   {/* <td>
//                     <span className="label label-lg label-light-danger label-inline">
//                       Suspended
//                     </span>
//                   </td>
//                   <td>
//                     <span className="label label-dot label-success mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-success">Business</span>
//                   </td> */}
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
                  
//                   <td>10</td>
//                   <td>Adham</td>
//                   {/* <td>Hurtic</td> */}
//                   <td  style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a...</td>
//                   <td>20</td>
//                   {/* <td>
//                     <span className="label label-lg label-light-success label-inline">
//                       Active
//                     </span>
//                   </td>
//                   <td>
//                     <span className="label label-dot label-success mr-2" />
//                     &nbsp;
//                     <span className="font-bold font-success">Business</span>
//                   </td> */}
//                   <td className="text-right pr-0" style={{ minWidth: 100 }}>
//                   <VisibilityIcon style={{color:"orange"}} />

//                     <a
//                       title="Edit customer"
//                       className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-primary">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / Communication / Write</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-Communication-/-Write"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
//                               id="Path-11"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
//                             />
//                             <path
//                               d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
//                               id="Path-57"
//                               fill="#000000"
//                               fillRule="nonzero"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>{" "}
//                     <a
//                       title="Delete customer"
//                       className="btn btn-icon btn-light btn-hover-danger btn-sm"
//                     >
//                       <span className="svg-icon svg-icon-md svg-icon-danger">
//                         <svg
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>Stockholm-icons / General / Trash</title>
//                           <desc>Created with Sketch.</desc>
//                           <defs />
//                           <g
//                             id="Stockholm-icons-/-General-/-Trash"
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <rect
//                               id="bound"
//                               x={0}
//                               y={0}
//                               width={24}
//                               height={24}
//                             />
//                             <path
//                               d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                               id="round"
//                               fill="#000000"
//                               fillRule="nonzero"
//                             />
//                             <path
//                               d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                               id="Shape"
//                               fill="#000000"
//                               opacity="0.3"
//                             />
//                           </g>
//                         </svg>
//                       </span>
//                     </a>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="d-flex justify-content-between align-items-center flex-wrap">
//             <div className="d-flex flex-wrap py-2 mr-3 ">
//               <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
//                 <i className="ki ki-bold-double-arrow-back icon-xs" />
//               </a>
//               <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
//                 <i className="ki ki-bold-arrow-back icon-xs" />
//               </a>
//               <a className="btn btn-icon btn-sm border-0 btn-light  btn-hover-primary active mr-2 my-1">
//                 1
//               </a>
//               <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
//                 2
//               </a>
//               <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
//                 3
//               </a>
//               <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
//                 4
//               </a>
//               <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
//                 5
//               </a>
//               <a className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">
//                 ...
//               </a>
//               <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
//                 <i className="ki ki-bold-arrow-next icon-xs" />
//               </a>
//               <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
//                 <i className="ki ki-bold-double-arrow-next icon-xs" />
//               </a>
//             </div>
//             <div className="d-flex align-items-center py-3">
//               <select
//                 className="form-control form-control-sm font-weight-bold mr-4 border-0 bg-light false"
//                 style={{ width: 75 }}
//               >
//                 <option className="btn ">3</option>
//                 <option className="btn ">5</option>
//                 <option className="btn ">10</option>
//               </select>
//               <span className="react-bootstrap-table-pagination-total">
//                 &nbsp;Showing rows 1 to&nbsp;10 of&nbsp;100
//               </span>
//             </div>
//           </div>
//         </div>
      
//       </div>
//     </div>
//     </>
//   );
// }

// /* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */ 
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers/index";

export function MovieList({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Agents Stats
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            More than 400+ new members
          </span>
        </h3>
        <div className="card-toolbar">
          <a
            href="#"
            className="btn btn-success font-weight-bolder font-size-sm"
          >
            <span className="svg-icon svg-icon-md svg-icon-white">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Add-user.svg"
                )}
                className="h-50 align-self-center"
              ></SVG>
            </span>
            Add New Member
          </a>
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-0">
        {/* begin::Table */}
        <div className="table-responsive">
          <table
            className="table table-head-custom table-vertical-center"
            id="kt_advance_table_widget_1"
          >
            <thead>
              <tr className="text-left">
                <th className="pl-0" style={{ width: "20px" }}>
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </th>
                <th className="pr-0" style={{ width: "50px" }}>
                  authors
                </th>
                <th style={{ minWidth: "200px" }} />
                <th style={{ minWidth: "150px" }}>company</th>
                <th style={{ minWidth: "150px" }}>progress</th>
                <th className="pr-0 text-right" style={{ minWidth: "150px" }}>
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span className="symbol-label">
                    <img  src=".././images/lastNight.png" className="h-100 w-100 align-self-end" alt="lastNight" />

                      {/* <SVG
                        src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
                        className="h-75 align-self-end"
                      ></SVG> */}
                    </span>
                  </div>
                </td>
               
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    Brad Simmons
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    HTML, JS, ReactJS
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Intertico
                  </span>
                  <span className="text-muted font-weight-bold">
                    Web, UI/UX Design
                  </span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 mr-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-muted mr-2 font-size-sm font-weight-bold">
                        65%
                      </span>
                      <span className="text-muted font-size-sm font-weight-bold">
                        Progress
                      </span>
                    </div>
                    <div className="progress progress-xs w-100">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Settings-1.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>


              <tr>
                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>
                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span className="symbol-label">
    <img  src=".././images/lastBreath.png" className="h-100 w-100 align-self-end" alt="lastBreath" />

                      {/* <SVG
                        src={toAbsoluteUrl("/media/svg/avatars/018-girl-9.svg")}
                        className="h-75 align-self-end"
                      ></SVG> */}
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    Jessie Clarcson
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    C#, ASP.NET, MS SQL
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Agoda
                  </span>
                  <span className="text-muted font-weight-bold">
                    Houses & Hotels
                  </span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 mr-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-muted mr-2 font-size-sm font-weight-bold">
                        83%
                      </span>
                      <span className="text-muted font-size-sm font-weight-bold">
                        Progress
                      </span>
                    </div>
                    <div className="progress progress-xs w-100">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "83%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Settings-1.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>
                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-lightv mt-1">
                    <span className="symbol-label">
    <img  src=".././images/lastBreath.png" className="h-100 w-100 align-self-end" alt="lastBreath" />

                      {/* <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/avatars/047-girl-25.svg"
                        )}
                        className="h-75 align-self-end"
                      ></SVG> */}
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    Lebron Wayde
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    PHP, Laravel, VueJS
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    RoadGee
                  </span>
                  <span className="text-muted font-weight-bold">
                    Transportation
                  </span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 mr-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-muted mr-2 font-size-sm font-weight-bold">
                        47%
                      </span>
                      <span className="text-muted font-size-sm font-weight-bold">
                        Progress
                      </span>
                    </div>
                    <div className="progress progress-xs w-100">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "83%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Settings-1.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>
                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light  mt-1">
                    <span className="symbol-label">
    <img  src=".././images/lastNight.png" className="h-100 w-100 align-self-end" alt="lastNight" />

                      {/* <SVG
                        src={toAbsoluteUrl("/media/svg/avatars/014-girl-7.svg")}
                        className="h-75 align-self-end"
                      ></SVG> */}
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    Natali Trump
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    Python, PostgreSQL, ReactJS
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    The Hill
                  </span>
                  <span className="text-muted font-weight-bold">Insurance</span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 mr-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-muted mr-2 font-size-sm font-weight-bold">
                        71%
                      </span>
                      <span className="text-muted font-size-sm font-weight-bold">
                        Progress
                      </span>
                    </div>
                    <div className="progress progress-xs w-100">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "71%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Settings-1.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              
                </tr>


                <tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="1" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span className="symbol-label">
    <img  src=".././images/lastBreath.png" className="h-100 w-100 align-self-end" alt="lastBreath" />

      {/* <SVG
        src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
        className="h-75 align-self-end"
      ></SVG> */}
    </span>
  </div>
</td>

<td className="pl-0">
  <a
    href="#"
    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
  >
    Brad Simmons
  </a>
  <span className="text-muted font-weight-bold text-muted d-block">
    HTML, JS, ReactJS
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
    Intertico
  </span>
  <span className="text-muted font-weight-bold">
    Web, UI/UX Design
  </span>
</td>
<td>
  <div className="d-flex flex-column w-100 mr-2">
    <div className="d-flex align-items-center justify-content-between mb-2">
      <span className="text-muted mr-2 font-size-sm font-weight-bold">
        65%
      </span>
      <span className="text-muted font-size-sm font-weight-bold">
        Progress
      </span>
    </div>
    <div className="progress progress-xs w-100">
      <div
        className="progress-bar bg-danger"
        role="progressbar"
        style={{ width: "65%" }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</td>

<td className="pr-0 text-right">
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Settings-1.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>

                  
<tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="1" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span className="symbol-label">
    <img  src=".././images/jeonWoochis.png" className="h-100 w-100 align-self-end" alt="jeonWoochis" />

      {/* <SVG
        src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
        className="h-75 align-self-end"
      ></SVG> */}
    </span>
  </div>
</td>

<td className="pl-0">
  <a
    href="#"
    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
  >
    Brad Simmons
  </a>
  <span className="text-muted font-weight-bold text-muted d-block">
    HTML, JS, ReactJS
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
    Intertico
  </span>
  <span className="text-muted font-weight-bold">
    Web, UI/UX Design
  </span>
</td>
<td>
  <div className="d-flex flex-column w-100 mr-2">
    <div className="d-flex align-items-center justify-content-between mb-2">
      <span className="text-muted mr-2 font-size-sm font-weight-bold">
        65%
      </span>
      <span className="text-muted font-size-sm font-weight-bold">
        Progress
      </span>
    </div>
    <div className="progress progress-xs w-100">
      <div
        className="progress-bar bg-danger"
        role="progressbar"
        style={{ width: "65%" }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</td>

<td className="pr-0 text-right">
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Settings-1.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>

                  
<tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="1" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span className="symbol-label">
    <img  src=".././images/lastBreath.png" className="h-100 w-100 align-self-end" alt="lastBreath" />

      {/* <SVG
        src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
        className="h-75 align-self-end"
      ></SVG> */}
    </span>
  </div>
</td>

<td className="pl-0">
  <a
    href="#"
    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
  >
    Brad Simmons
  </a>
  <span className="text-muted font-weight-bold text-muted d-block">
    HTML, JS, ReactJS
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
    Intertico
  </span>
  <span className="text-muted font-weight-bold">
    Web, UI/UX Design
  </span>
</td>
<td>
  <div className="d-flex flex-column w-100 mr-2">
    <div className="d-flex align-items-center justify-content-between mb-2">
      <span className="text-muted mr-2 font-size-sm font-weight-bold">
        65%
      </span>
      <span className="text-muted font-size-sm font-weight-bold">
        Progress
      </span>
    </div>
    <div className="progress progress-xs w-100">
      <div
        className="progress-bar bg-danger"
        role="progressbar"
        style={{ width: "65%" }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</td>

<td className="pr-0 text-right">
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Settings-1.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>

                  
<tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="1" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span className="symbol-label">
    <img  src=".././images/jeonWoochis.png" className="h-100 w-100 align-self-end" alt="jeonWoochis" />

      {/* <SVG
        src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
        className="h-75 align-self-end"
      ></SVG> */}
    </span>
  </div>
</td>

<td className="pl-0">
  <a
    href="#"
    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
  >
    Brad Simmons
  </a>
  <span className="text-muted font-weight-bold text-muted d-block">
    HTML, JS, ReactJS
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
    Intertico
  </span>
  <span className="text-muted font-weight-bold">
    Web, UI/UX Design
  </span>
</td>
<td>
  <div className="d-flex flex-column w-100 mr-2">
    <div className="d-flex align-items-center justify-content-between mb-2">
      <span className="text-muted mr-2 font-size-sm font-weight-bold">
        65%
      </span>
      <span className="text-muted font-size-sm font-weight-bold">
        Progress
      </span>
    </div>
    <div className="progress progress-xs w-100">
      <div
        className="progress-bar bg-danger"
        role="progressbar"
        style={{ width: "65%" }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</td>

<td className="pr-0 text-right">
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Settings-1.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-primary btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>

              


              
            </tbody>
          </table>
        </div>
        {/* end::Table */}
      </div>
      {/* end::Body */}
    </div>
  );
}