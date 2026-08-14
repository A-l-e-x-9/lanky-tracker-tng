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
import CavernKasplats from '../kasplats/Caverns'
import LighthouseChecks from './Lighthouse'
import LighthouseKasplats from '../kasplats/Lighthouse'
import OutskirtsChecks from './Outskirts'
import OutskirtKasplats from '../kasplats/Outskirts'
import FiveShipChecks from './Ship'
import TreasureChecks from './Treasure'
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
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <CavernKasplats />
    </div>
      <LighthouseChecks />
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <LighthouseKasplats />
    </div>
      <OutskirtsChecks />
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <OutskirtKasplats />
    </div>
      <TreasureChecks />
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
