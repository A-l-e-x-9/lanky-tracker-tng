import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossCheck from '../boss'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import CavernsChecks from './Caverns'
import LighthouseChecks from './Lighthouse'
import OutskirtsChecks from './Outskirts'
import FiveShipChecks from './Ship'
import TreasureChecks from './Treasure'

const GalleonRegionChecks: React.FC = () => (
  <>
    <div className="grid">
      <BananaMedalPool>
        <DkMedal />
        <DiddyMedal />
        <LankyMedal />
        <TinyMedal />
        <ChunkyMedal />
      </BananaMedalPool>
      <CavernsChecks />
      <LighthouseChecks />
      <OutskirtsChecks />
      <TreasureChecks />
      <FiveShipChecks />
      <ShopLocations />
      <BossCheck />
    </div>
  </>
)

export default GalleonRegionChecks
