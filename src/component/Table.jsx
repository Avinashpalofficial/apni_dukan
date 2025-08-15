import Tabletop from "./Tabletop"
import {orderData} from "./data"
function Table(){
    return(
        <div className="pt-6 px-3 pb-3 grid gap-4">
            <Tabletop/>
             <table className="w-full text-sm text-gray-500 ">
                 <tr>
               
                    <th>ORDER ID</th>
               
               
                    <th>STATUS</th>
                
                
                    <th>
                        TRANSACTION ID
                    </th>
               
                    <th>
                        REFUND DATE
                    </th>
               
                    <th>
                        ORDER AMOUNT
                    </th>
                
              </tr>

                   {
                    orderData.map((order)=>{
                        return (
                            <tbody>
                                <tr>
                                    <td>
                                        #{order.id}
                                    </td>
                                    <td>
                                        {order.status}

                                    </td>
                                    <td>
                                        {order.transactionID}
                                    </td>
                                    <td>
                                        {order.refundDate}
                                    </td>
                                    <td>
                                        {order.amount}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                   }

             </table>

        </div>
    )
}
export default Table