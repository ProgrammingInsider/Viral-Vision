import Button from "./Button"
import Package from "./Package"
import {packagesType} from "@/utils/types"



const OurPackages = ({packages, button=true}:{packages:packagesType[], button?:boolean}) => {
  return <>
    <div className="flex flex-col items-center justify-center w-full h-full py-24">
      <h1 className="sectionName">Our Packages</h1>
      <h1 className="sectionHeader">Flexible Plans Tailored to Your Needs</h1>
      <p className="text-base text-center">Choose from scalable social media marketing packages designed to fit businesses of all sizes and goals.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 flex-wrap items-center justify-center max-w-6xl w-full gap-4 mx-auto p-4 mt-12">
       {
            packages.map((item, index) => (
                <Package key={index} name={item.name} good_for={item.good_for} price={item.price} description={item.description} Projected_Growth={item.Projected_Growth} />
            ))
       }
      </div>
      {
        button && (
          <div className="mt-8">
            <Button link="ourservices" value="See More Packages" />
          </div>
        )
      }
    </div>
  </>
}

export default OurPackages