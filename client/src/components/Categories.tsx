"use client"
import {
    Footprints,
    Glasses,
    Briefcase,
    Shirt,
    ShoppingBasket,
    Hand,
    Venus,
} from "lucide-react"
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const categories = [
    {
        name: "All",
        icon: <ShoppingBasket className="w-4 h-4" />,
        slug: "all",
    },
    {
        name: "T-shirts",
        icon: <Shirt className="w-4 h-4" />,
        slug: "t-shirts",
    },
    {
        name: "Shoes",
        icon: <Footprints className="w-4 h-4" />,
        slug: "shoes",
    },
    {
        name: "Accessories",
        icon: <Glasses className="w-4 h-4" />,
        slug: "accessories",
    },
    {
        name: "Bags",
        icon: <Briefcase className="w-4 h-4" />,
        slug: "bags",
    },
    {
        name: "Dresses",
        icon: <Venus className="w-4 h-4" />,
        slug: "dresses",
    },
    {
        name: "Jackets",
        icon: <Shirt className="w-4 h-4" />,
        slug: "jackets",
    },
    {
        name: "Gloves",
        icon: <Hand className="w-4 h-4" />,
        slug: "gloves",
    },
];

const Categories = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    console.log("searchParams", searchParams.toString());

    const router = useRouter()

    const selectedCat = searchParams.get("category")  //for style

    const handleClick = (value: string | null) => {
        const params = new URLSearchParams(searchParams) //get all params
        console.log("params", params.toString());

        params.set("category", value || "all")
        router.push(`${pathname}?${params.toString()}`,{scroll:false})
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
    lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm
    ">
            {
                categories.map((category) => (
                    <div onClick={() => handleClick(category.slug)} className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md 
                    ${category.slug === selectedCat ? "bg-white" : "text-gray-500"}`}
                        key={category.name}>

                        {category.icon}
                        {category.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Categories