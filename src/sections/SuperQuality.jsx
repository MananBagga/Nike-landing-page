import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Our Super Quality Shoes are the result of a relentless pursuit of excellence. Every pair is designed with precision, using premium materials that ensure durability, comfort, and a perfect fit. We partner with the best manufacturers and designers to bring you shoes that not only look great but also stand the test of time.</p>
        <p className="mt-6 lg:max-w-lg info-text">Whether you’re hitting the gym, the streets, or the office, our shoes are built to support your lifestyle. We pay attention to every detail, from the stitching to the sole, ensuring that each shoe meets the highest standards of craftsmanship</p>

        <div className="mt-11">
        <Button label = "View Details"/>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="Shoe8" width={570} height={580} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality
