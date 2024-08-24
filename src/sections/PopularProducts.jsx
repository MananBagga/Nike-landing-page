import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="text-slate-gray font-montserrat lg:max-w-lg mt-2">Step into style and comfort with our most sought-after Nike sneakers, handpicked by enthusiasts and trendsetters alike. Whether you're looking for the iconic Air Jordans or the latest Air Max, these top-selling models deliver unbeatable quality, comfort, and performance.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((prod) => (
          <PopularProductCard key = {prod.name} {...prod} />
        ))}

      </div>
    </section>
  )
}

export default PopularProducts
