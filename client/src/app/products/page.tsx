import ProductList from "@/components/ProductList";

const ProductsPage = async({searchParams}:{searchParams:Promise<{category:string}>}) => {
 //in next by using searchparams can fetch the category from url
 const category=(await searchParams).category;
  return (
    <div>
        <ProductList category={category} params="products" />
    </div>
  )
}

export default ProductsPage