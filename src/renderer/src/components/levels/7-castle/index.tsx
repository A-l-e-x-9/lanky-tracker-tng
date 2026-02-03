import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import DropPool from '@renderer/components/pools/Drops'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GreenhouseArena from './arenas/Greenhouse'
import BossCheck from './boss'
import MausoleumCrate from './crates/Mausoleum'
import TopFloorDirt from './dirt/TopFloor'
import EnemyLocations from './enemies'
import FairyLocations from './fairies'
import ShuffledArenas from './arenas/Shuffled'
import ShuffledCrates from './crates/Shuffled'
import ShuffledDirt from './dirt/Shuffled'
import ShuffledFairies from './fairies/Shuffled'
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
import CastleRegionChecks from './regions'
import CastleShops from './shops'
import BoulderCheck from './boulder'

const ClassicChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
<>
  <p className="not-available"><strong>WARNING:</strong> If you don't have Climbing and you attempt to do any check in the Crypt area, you won't be able to get back up without killing your Kong, pause-exiting/re-entering, or abusing high-grabs on the gravestones with Tiny and Chunky.</p>
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
    <MausoleumCrate />
    <TopFloorDirt />
    <FairyLocations />
    <GreenhouseArena />
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <BoulderCheck />
    <BossCheck />
    <CastleShops />
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

const CastleChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <CastleRegionChecks /> : <ClassicChecks />
}

export default CastleChecks
