
import Sidebar from "./component/Sidebar.jsx";
import Navbar from "./component/Navbar.jsx";
import Overview from "./component/Overview.jsx";
import Transaction from "./component/Transaction.jsx";
import "./App.css";


function App() {

//   return (


// //     <div className="flex flex-col sm:flex-row justify-between   ">
// //       <div className="text-4xl font-bold backdrop-blur-2xl w-[40%]  bg-amber-600">
// //         hello
// //       </div>
// //      <div className="w-full sm:w-1/3">
// //   {/* Full Search Box for sm and above */}
// //   <div className="hidden sm:flex items-center border border-gray-300 rounded-md overflow-hidden  w-[60%]  bg-red-500">
// //     <input
// //       type="text"
// //       placeholder="search"
// //       className="w-full px-4 py-2 outline-none text-gray-700"
// //     />
// //     <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
// //       <svg
// //         xmlns="http://www.w3.org/2000/svg"
// //         fill="none"
// //         viewBox="0 0 24 24"
// //         strokeWidth="1.5"
// //         stroke="currentColor"
// //         className="w-5 h-5"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
// //         />
// //       </svg>
// //     </button>
// //   </div>

// //   {/* Icon only for small screens */}
// //   <div className="flex sm:hidden  p-2">
// //     <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer">
// //       <svg
// //         xmlns="http://www.w3.org/2000/svg"
// //         fill="none"
// //         viewBox="0 0 24 24"
// //         strokeWidth="1.5"
// //         stroke="currentColor"
// //         className="w-6 h-6"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
// //         />
// //       </svg>
// //     </button>
// //   </div>
// // </div>

// //       <div className="text-4xl font-bold backdrop-blur-2xl bg-red-500">
// //         Avinash
// //       </div>
// //     </div>
      
// );
        return(
           <div className="bg-white-50 " >
                    
                        <Sidebar />

      <div className="border-b border-black-150 sm:pl-64 bg-white-500">
        <Navbar />
      </div>
       {/* <Bluecard/> */}
       <div className="m-5 mb-0 sm:ml-64 grid gap-8">
 <Overview/>
            <div className=" gap-2">
               <Transaction/>
            </div>
       </div>
          
                  
                 
                 

                     
                  
               
           </div>
        )


}

export default App;
