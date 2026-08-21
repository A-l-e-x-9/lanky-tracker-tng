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
import MainChecks from './Main'
import MainArenas from '../arenas/Main'
import MainCrates from '../crates/Main'
import MainKasplats from '../kasplats/Main'
import IglooChecks from './Igloo'
import IglooArenas from '../arenas/Igloo'
import IglooCrates from '../crates/Igloo'
import IglooKasplats from '../kasplats/Igloo'
import CabinsChecks from './Cabins'
import CabinArenas from '../arenas/Cabins'
import CabinCrates from '../crates/Cabins'
import CabinKasplats from '../kasplats/Cabins'
import ShuffledArenas from '../arenas/Shuffled'
import ShuffledCrates from '../crates/Shuffled'
import ShuffledDirt from '../dirt/Shuffled'
import ShuffledFairies from '../fairies/Shuffled'
import ShuffledKasplats from '../kasplats/Shuffled'

const CavesRegionChecks: React.FC = () => {
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
    <MainChecks />
  <div className="grid">
    <MainArenas />
    <MainCrates />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <MainKasplats />
  </div>
    <IglooChecks />
  <div className="grid">
    <IglooArenas />
    <IglooCrates />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <IglooKasplats />
  </div>
    <CabinsChecks />
  <div className="grid">
    <CabinArenas />
    <CabinCrates />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <CabinKasplats />
  </div>
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

export default CavesRegionChecks
