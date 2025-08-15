
import Sidebar from "./component/Sidebar.jsx";
import Navbar from "./component/Navbar.jsx";
import Overview from "./component/Overview.jsx";
import Transaction from "./component/Transaction.jsx";
import "./App.css";
import Tabletop from "./component/Tabletop.jsx";
import Table from "./component/Table.jsx";


function App() {


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
               <Table/>
            </div>
       </div>
          
                  
                 
                 

                     
                  
               
           </div>
        )


}

export default App;
