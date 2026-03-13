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
import ShuffledArenas from './arenas/Shuffled'
import ShuffledCrates from './crates/Shuffled'
import ShuffledDirt from './dirt/Shuffled'
import ShuffledFairies from './fairies/Shuffled'
import ShuffledKasplats from './kasplats/Shuffled'

const ClassicChecks: React.FC = () => {
const [isKremKaptureSeed, isFairySeed, isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.kremlingKapture, state.winCondition.fairies, state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const [fairiesInRotation, kasplatsInRotation] = useDonkStore(useShallow((state) => [state.settings.poolFairies, state.settings.poolBlueprints])) ? '' : 'foolish'
return (
<>
<div className="grid">
    <DkBananas />
    <DiddyBananas />
    <LankyBananas />
    <TinyBananas />
    <ChunkyBananas />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <KasplatLocations />
  </div>
  <div className="grid">
    <CrateLocations />
    <DirtLocations />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <FairyLocations />
  </div>
  <div className="grid">
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

const JapesChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <JapesRegionChecks /> : <ClassicChecks />
}

export default JapesChecks
