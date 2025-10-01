import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = async({searchParams}:{searchParams:Promise<{category:string}>}) => {
 //i next by using searchparams can fetch the category from url
 const category=(await searchParams).category;
  return (
    <div className=''>
      <div className="relative aspect-[3/1] mb-12">
        <Image src='/featured.png' alt="Featured Product" fill/>
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  )
}

export default Homepage 