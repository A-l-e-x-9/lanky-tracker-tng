import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BeanstalkChecks from './Beanstalk'
import BossCheck from '../boss'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import CenterChecks from './Center'
import CenterArenas from '../arenas/Center'
import CenterFairies from '../fairies/Center'
import MushExteriorChecks from './MushExterior'
import MushExteriorArenas from '../arenas/MushExterior'
import MushInteriorChecks from './MushInterior'
import MushInteriorArenas from '../arenas/MushInterior'
import MushInteriorFairies from '../fairies/MushInterior'
import OwlChecks from './Owl'
import MillsChecks from './Mills'
import MillsArenas from '../arenas/Mills'
import MillsFairies from '../fairies/Mills'
import ShuffledArenas from '../arenas/Shuffled'
import ShuffledCrates from '../crates/Shuffled'
import ShuffledDirt from '../dirt/Shuffled'
import ShuffledFairies from '../fairies/Shuffled'
import ShuffledKasplats from '../kasplats/Shuffled'

const ForestRegionChecks: React.FC = () => {
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
    <CenterChecks />
    <CenterArenas />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <CenterFairies />
  </div>
    <MillsChecks />
    <MillsArenas />
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <MillsFairies />
  </div>
  <div className="grid">
    <BeanstalkChecks />
  </div>
    <MushExteriorChecks />
    <MushExteriorArenas />
    <MushInteriorChecks />
    <MushInteriorArenas />
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <MushInteriorFairies />
  </div>
    <OwlChecks />
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
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <ShuffledKasplats />
  </div>
</>
)
}

export default ForestRegionChecks
