"use client"
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Filter = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router=useRouter()

      const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams) //get all params
        console.log("params", params.toString());

        params.set("sort", value )
        router.push(`${pathname}?${params.toString()}`,{scroll:false})
    }
    return (
        <div className="flex items-center justify-end gap-2 text-sm test-gray-500 my-6 " >
            <span>Sort by:</span>
            <select onChange={(e)=>handleFilter(e.target.value)} name="sort" id="sort" className="ring-gray-200 shadow-md p-1 ring-1 rounded-sm">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="asc">Price:Low to High</option>
                <option value="desc">Price:High to Low</option>
            </select>
        </div>
    )
}

export default Filter