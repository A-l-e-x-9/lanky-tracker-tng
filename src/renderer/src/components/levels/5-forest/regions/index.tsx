import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BeanstalkChecks from './Beanstalk'
import BossCheck from '../boss'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import CenterChecks from './Center'
import MushExteriorChecks from './MushExterior'
import MushInteriorChecks from './MushInterior'
import OwlChecks from './Owl'
import MillsChecks from './Mills'

const ForestRegionChecks: React.FC = () => (
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <CenterChecks />
    <MillsChecks />
    <BeanstalkChecks />
    <MushExteriorChecks />
    <MushInteriorChecks />
    <OwlChecks />
    <ShopLocations />
    <BossCheck />
  </div>
)

export default ForestRegionChecks
