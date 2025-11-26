import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossCheck from '../boss'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import StartEnemies from '../enemies/Start'
import TestingChecks from './Testing'
import RNDChecks from './Research'
import StorageChecks from './Storage'
import ProductionChecks from './Production'
import ShuffledFairies from '../fairies/Shuffled'

const FactoryRegionChecks: React.FC = () => (
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <StartEnemies />
    <TestingChecks />
    <RNDChecks />
    <StorageChecks />
    <ProductionChecks />
    <ShopLocations />
    <BossCheck />
    <ShuffledFairies />
  </div>
)

export default FactoryRegionChecks
