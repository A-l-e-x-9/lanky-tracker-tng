import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossCheck from '../boss'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import CavernsChecks from './Caverns'
import CavernArenas from '../arenas/Caverns'
import CavernCrates from '../crates/Caverns'
import CavernFairies from '../fairies/Caverns'
import CavernKasplats from '../kasplats/Caverns'
import LighthouseChecks from './Lighthouse'
import LighthouseArenas from '../arenas/Lighthouse'
import LighthouseCrates from '../crates/Lighthouse'
import LighthouseFairies from '../fairies/Lighthouse'
import LighthouseKasplats from '../kasplats/Lighthouse'
import OutskirtsChecks from './Outskirts'
import OutskirtCrates from '../crates/Outskirts'
import OutskirtKasplats from '../kasplats/Outskirts'
import FiveShipChecks from './Ship'
import TreasureChecks from './Treasure'
import TreasureCrates from '../crates/Treasure'
import TreasureKasplats from '../kasplats/Treasure'
import ShuffledArenas from '../arenas/Shuffled'
import ShuffledCrates from '../crates/Shuffled'
import ShuffledDirt from '../dirt/Shuffled'
import ShuffledFairies from '../fairies/Shuffled'
import ShuffledKasplats from '../kasplats/Shuffled'

const GalleonRegionChecks: React.FC = () => {
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
    <div className="grid">
      <BananaMedalPool>
        <DkMedal />
        <DiddyMedal />
        <LankyMedal />
        <TinyMedal />
        <ChunkyMedal />
      </BananaMedalPool>
    </div>
      <CavernsChecks />
    <div className="grid">
      <CavernArenas />
      <CavernCrates />
    </div>
    <div className={`grid ${isFairySeed && fairiesInRotation}`}>
      <CavernFairies />
    </div>
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <CavernKasplats />
    </div>
      <LighthouseChecks />
    <div className="grid">
      <LighthouseArenas />
      <LighthouseCrates />
    </div>
    <div className={`grid ${isFairySeed && fairiesInRotation}`}>
      <LighthouseFairies />
    </div>
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <LighthouseKasplats />
    </div>
      <OutskirtsChecks />
    <div className="grid">
      <OutskirtCrates />
    </div>
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <OutskirtKasplats />
    </div>
      <TreasureChecks />
    <div className="grid">
      <TreasureCrates />
    </div>
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <TreasureKasplats />
    </div>
      <FiveShipChecks />
    <div className="grid">
      <ShopLocations />
      <BossCheck />
      <ShuffledArenas />
      <ShuffledCrates />
      <ShuffledDirt />
    </div>
    <div className={`grid ${isFairySeed && fairiesInRotation}`}>
      <ShuffledFairies />
    </div>
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <ShuffledKasplats />
    </div>
  </>
)
}

export default GalleonRegionChecks
