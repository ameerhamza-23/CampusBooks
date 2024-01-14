import Avatar from "../components/Avatar"

export default function BookDetails() {
    return (

        <div className="p-4">

            <div className="grid grid-cols-2 gap-20">
                <div className="col-span-1 flex justify-center">
                    <div style={{width:'50rem' ,height:'50rem'}} className="">
                        <img src="/images/algo.jpeg" className="w-full h-full overflow-fill rounded-xl"/>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="pt-10 flex flex-col gap-4">
                        <h1 className="font-bold text-4xl">Algorithms and Data Structures</h1>
                        <h1>by Ameer Hamza</h1>
                        <h1 className="font-bold text-lg pt-4">Edition: 11th</h1>
                        <h1 className="font-bold text-lg pt-4">Semester: 6th</h1>
                        <h1 className="font-bold text-lg pt-4">Condition: Used</h1>
                        <span className="flex justify-between">
                            <h1 className="font-bold text-2xl pt-10">Price: 1500</h1>
                            <span className="flex items-center gap-4"><h1 className="text-md">Sold by: Ameer Hamza</h1><Avatar /></span>
                        </span>
                        
                        

                    </div>
                </div>
            </div>

        </div>

    )
}