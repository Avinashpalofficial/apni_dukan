import Tabletop from "./Tabletop"
import {orderData} from "./data"
function Table(){
    return(
        <div className="pt-6 px-3 pb-3 grid gap-4 bg-white shadow-lg border-b border-white ">
            <Tabletop/>
            <div className="relative overflow-x-auto">          
             <table className="w-full text-sm text-gray-500 text-left  ">
                 <thead className="text-xm font-medium rounded uppercase text-black-400">
                    <tr className=" ">
               
                    <th scope="col" className="px-6 py-4 font-medium">ORDER ID</th>
               
               
                    <th className="px-6 py-4 font-medium">STATUS</th>
                
                
                    <th className="px-6 py-4 font-medium">
                        TRANSACTION ID
                    </th>
               
                    <th className="px-6 py-4 font-medium">
                        REFUND DATE
                    </th>
               
                    <th className="px-6 py-4 font-medium" >
                        ORDER AMOUNT
                    </th>
                
              </tr>
                 </thead>

                   {
                    orderData.map((order)=>{
                        return (
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <td className="text-blue-400 px-6 py-4 ">
                                        #{order.id}
                                    </td>
                                    <td className="px-6 py-4 flex items-center gap-2" >
                                        {order.status ==="Successful" &&  <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div> }
                                        {order.status ==="Processing" &&  <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div> }
                                        {order.status ==="Failed" &&  <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div> }
                                        {order.status}

                                    </td>
                                    <td className="px-6 py-4">
                                        {order.transactionID}
                                    </td>
                                    <td className="px-6 py-4">
                                        {order.refundDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {order.amount}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                   }

             </table>
            </div>
        </div>
    )
}
export default Table