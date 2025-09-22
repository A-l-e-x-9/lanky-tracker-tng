import BananaMedalPool from '@renderer/src/components/pools/BananaMedals'
import DropPool from '@renderer/src/components/pools/Drops'
import useDonkStore from '@renderer/src/store'
import { useShallow } from 'zustand/react/shallow'
import MushroomArena from './arenas/Mushroom'
import BossCheck from './boss'
import CrateLocations from './crates'
import DirtLocations from './dirt'
import EnemyLocations from './enemies'
import FairyLocations from './fairies'
import ChunkyBananas from './gold-bananas/chunky'
import DiddyBananas from './gold-bananas/diddy'
import DkBananas from './gold-bananas/dk'
import LankyBananas from './gold-bananas/lanky'
import TinyBananas from './gold-bananas/tiny'
import KasplatLocations from './kasplats'
import ChunkyMedal from './medals/ChunkyMedal'
import DiddyMedal from './medals/DiddyMedal'
import DkMedal from './medals/DkMedal'
import LankyMedal from './medals/LankyMedal'
import TinyMedal from './medals/TinyMedal'
import ForestRegionChecks from './regions'
import ForestShops from './shops'
import BoulderLocations from './boulders'

const ClassicChecks: React.FC = () => (
  <div className="grid">
    <DkBananas />
    <DiddyBananas />
    <LankyBananas />
    <TinyBananas />
    <ChunkyBananas />
    <KasplatLocations />
    <CrateLocations />
    <DirtLocations />
    <FairyLocations />
    <MushroomArena />
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <BoulderLocations />
    <BossCheck />
    <ForestShops />
    <DropPool>
      <EnemyLocations />
    </DropPool>
  </div>
)

const ForestChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <ForestRegionChecks /> : <ClassicChecks />
}

export default ForestChecks
