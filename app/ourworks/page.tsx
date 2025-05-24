import Banner from "@/components/Banner";
import OurWorks from "@/components/OurWorks";
import { OurWorksData } from "@/utils/localstorage"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - VIRAL VISION",
};

const OurWork = () => {
  return <>
      <Banner pageName="Our Works" page="Works" url="/ourworks" />
      <OurWorks button={false} ourWorks={OurWorksData()} />
  </>
}

export default OurWork