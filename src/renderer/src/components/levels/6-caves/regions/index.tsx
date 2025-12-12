import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossCheck from '../boss'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import MainChecks from './Main'
import IglooChecks from './Igloo'
import CabinsChecks from './Cabins'
import ShuffledFairies from '../fairies/Shuffled'

const CavesRegionChecks: React.FC = () => (
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <MainChecks />
    <IglooChecks />
    <CabinsChecks />
    <ShopLocations />
    <BossCheck />
    <ShuffledFairies />
  </div>
)

export default CavesRegionChecks
