import BananaMedalPool, { IslesMedalPool } from '@renderer/components/pools/BananaMedals'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ArenaLocations from './arenas'
import CrateLocations from './crates'
import DirtLocations from './dirt'
import EnemyLocations from './enemies'
import FairyLocations from './fairies'
import FairyReward from './fairies/FairyReward'
import ChunkyBananas from './gold-bananas/chunky'
import DiddyBananas from './gold-bananas/diddy'
import DkBananas from './gold-bananas/dk'
import LankyBananas from './gold-bananas/lanky'
import TinyBananas from './gold-bananas/tiny'
import JetpacCheck from './jetpac'
import KasplatLocations from './kasplats'
import IslesRegionChecks from './regions'
import ShopLocations from './shops'
import ChunkyMedal from './medals/ChunkyMedal'
import DiddyMedal from './medals/DiddyMedal'
import DkMedal from './medals/DkMedal'
import LankyMedal from './medals/LankyMedal'
import TinyMedal from './medals/TinyMedal'
import BoulderLocations from './boulders'
import WrinklyDoors from './wrinkly'
import ShuffledArenas from './arenas/Shuffled'
import ShuffledCrates from './crates/Shuffled'
import ShuffledDirt from './dirt/Shuffled'
import ShuffledFairies from './fairies/Shuffled'
import ShuffledKasplats from './kasplats/Shuffled'

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
    <CrateLocations />
    <DirtLocations />
    <FairyLocations />
    <ArenaLocations />
    <BananaMedalPool>
      <IslesMedalPool>
        <DkMedal />
        <DiddyMedal />
        <LankyMedal />
        <TinyMedal />
        <ChunkyMedal />
      </IslesMedalPool>
    </BananaMedalPool>
    <BoulderLocations />
    <WrinklyDoors />
    <ShopLocations />
    <FairyReward />
    <JetpacCheck />
    <ShuffledArenas />
    <ShuffledCrates />
    <ShuffledDirt />
    <ShuffledFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <ShuffledKasplats />
    <EnemyLocations />
  </div>
  </>
)
}

const IsleChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <IslesRegionChecks /> : <ClassicChecks />
}

export default IsleChecks
