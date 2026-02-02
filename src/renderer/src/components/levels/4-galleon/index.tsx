import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import DropPool from '@renderer/components/pools/Drops'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavernArena from './arenas/Cavern'
import BossCheck from './boss'
import CactusCrate from './crates/Cactus'
import LighthouseDirt from './dirt/Lighthouse'
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
import GalleonRegionChecks from './regions'
import GalleonShops from './shops'
import ShuffledArenas from './arenas/Shuffled'
import ShuffledCrates from './crates/Shuffled'
import ShuffledDirt from './dirt/Shuffled'
import ShuffledFairies from './fairies/Shuffled'

const ClassicChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
<>
  <div className="grid">
    <DkBananas />
    <DiddyBananas />
    <LankyBananas />
    <TinyBananas />
    <ChunkyBananas />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <KasplatLocations />
  </div>
  <div className="grid">
    <CactusCrate />
    <LighthouseDirt />
    <FairyLocations />
    <CavernArena />
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <BossCheck />
    <GalleonShops />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DropPool>
      <EnemyLocations />
    </DropPool>
  </div>
  <div className="grid">
    <ShuffledArenas />
    <ShuffledCrates />
    <ShuffledDirt />
    <ShuffledFairies />
  </div>
</>
)
}

const GalleonChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <GalleonRegionChecks /> : <ClassicChecks />
}

export default GalleonChecks
