import GBPool from '@renderer/components/pools/GB'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import DropPool from '@renderer/components/pools/Drops'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FunkyArena from './arenas/Funky'
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
import JapesRegionChecks from './regions'
import JapesShops from './shops'

const ClassicChecks: React.FC = () => (
  <div className="grid">
  <GBPool>
    <DkBananas />
    <DiddyBananas />
    <LankyBananas />
    <TinyBananas />
    <ChunkyBananas />
  </GBPool>
    <KasplatLocations />
    <CrateLocations />
    <DirtLocations />
    <FairyLocations />
    <FunkyArena />
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <BossCheck />
    <JapesShops />
    <DropPool>
      <EnemyLocations />
    </DropPool>
  </div>
)

const JapesChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <JapesRegionChecks /> : <ClassicChecks />
}

export default JapesChecks
