
import CampSection from '@/components/CampSection'
import FeatureSection from '@/components/FeatureSection'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'
import GetApp from '@/components/GetApp'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div>
      <HeroSection/>
      <CampSection/>
      <GuideSection/>
      <FeatureSection/>
      <GetApp/>
      <Footer/>
    </div>
  )
}

export default page