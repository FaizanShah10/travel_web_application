import CampSection from '@/components/CampSection'
import FeatureSection from '@/components/FeatureSection'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'


const page = () => {
  return (
    <div>
      <HeroSection/>
      <CampSection/>
      <GuideSection/>
      <FeatureSection/>
    </div>
  )
}

export default page