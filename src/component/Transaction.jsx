function Transaction(){
    return (
        <div className=" grid gap-y-6">
            <div className="text-2xl font-medium" >
                <p>Transaction | This Month </p>
            </div>
            <div className="flex gap-8 ">
                <div className="py-1.5 px-4 rounded-2xl bg-black-200 text-gray-700 shadow-lg  ">Payouts(22)</div>
                <div className="py-1.5 px-4 rounded-2xl bg-blue-700 text-white  ">Refunds(6)</div>
            </div>
        </div>
    )
}
export default Transaction