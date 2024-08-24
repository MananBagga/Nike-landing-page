import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} alt="Image" width={773} height={687} className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red"> Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Our Special Offer is here to help you do just that! For a limited time, we're bringing you incredible discounts on our top-quality, stylish shoes. Whether you're looking for the latest Nike releases or timeless classics, we've got something for everyone.</p>
        <p className="mt-6 lg:max-w-lg info-text">Don’t miss out on these incredible deals! Step up your shoe game today and enjoy the best in style, comfort, and savings. Hurry, these offers won’t last long!</p>

        <div className="mt-11 flex flex-row gap-4">
        <Button label = "Shop Now" iconURL={arrowRight}/>
        <Button label = "Learn more" backgroundColor="bg-white" borderColor ="border-slate-gray" textColor = "text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
