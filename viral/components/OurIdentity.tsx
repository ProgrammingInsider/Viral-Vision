import CoreValues from "./CoreValues"
import Mission from "./Mission"
import Vision from "./Vision"

const OurIdentity = () => {
  return <>
        <div className="py-24">
            <h1 className="sectionName px-3">Our Vision, Mission & Core Values</h1>
            <h1 className="sectionHeader">Our Identity</h1>
            <p className="text-base text-center max-w-2xl mx-auto px-3">At the heart of everything we do is a clear vision, a powerful mission, and strong values that shape our journey and yours.</p>
            <div className="sm:flex gap-4 items-center lg:items-stretch justify-center w-full h-xl mx-auto mt-24 lg:flex-row">
                <div className="col-span-1">
                    <CoreValues/> 
                </div>
                <div className="flex h-full mt-4 md:mt-0 flex-col lg:flex-row xl:flex-col col-span-1 gap-4">
                    <Mission/>
                    <Vision/>
                </div>
            </div>
        </div>
  </>

}

export default OurIdentity