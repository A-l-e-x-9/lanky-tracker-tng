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
import CavernDirt from '../dirt/Caverns'
import CavernFairies from '../fairies/Caverns'
import CavernKasplats from '../kasplats/Caverns'
import LighthouseChecks from './Lighthouse'
import LighthouseArenas from '../arenas/Lighthouse'
import LighthouseCrates from '../crates/Lighthouse'
import LighthouseDirt from '../dirt/Lighthouse'
import LighthouseFairies from '../fairies/Lighthouse'
import LighthouseKasplats from '../kasplats/Lighthouse'
import OutskirtsChecks from './Outskirts'
import OutskirtArenas from '../arenas/Outskirts'
import OutskirtCrates from '../crates/Outskirts'
import OutskirtDirt from '../dirt/Outskirts'
import OutskirtFairies from '../fairies/Outskirts'
import OutskirtKasplats from '../kasplats/Outskirts'
import FiveShipChecks from './Ship'
import TreasureChecks from './Treasure'
import TreasureArenas from '../arenas/Treasure'
import TreasureCrates from '../crates/Treasure'
import TreasureDirt from '../dirt/Treasure'
import TreasureFairies from '../fairies/Treasure'
import TreasureKasplats from '../kasplats/Treasure'

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
      <CavernDirt />
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
      <LighthouseDirt />
    </div>
    <div className={`grid ${isFairySeed && fairiesInRotation}`}>
      <LighthouseFairies />
    </div>
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <LighthouseKasplats />
    </div>
      <OutskirtsChecks />
    <div className="grid">
      <OutskirtArenas />
      <OutskirtCrates />
      <OutskirtDirt />
    </div>
    <div className={`grid ${isFairySeed && fairiesInRotation}`}>
      <OutskirtFairies />
    </div>
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <OutskirtKasplats />
    </div>
      <TreasureChecks />
    <div className="grid">
      <TreasureArenas />
      <TreasureCrates />
      <TreasureDirt />
    </div>
    <div className={`grid ${isFairySeed && fairiesInRotation}`}>
      <TreasureFairies />
    </div>
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
      <TreasureKasplats />
    </div>
      <FiveShipChecks />
    <div className="grid">
      <ShopLocations />
      <BossCheck />
    </div>
  </>
)
}

export default GalleonRegionChecks
