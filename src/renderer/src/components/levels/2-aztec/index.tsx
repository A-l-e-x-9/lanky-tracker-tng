import DropPool from '@renderer/components/pools/Drops'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import VultureArena from './arenas/Vulture'
import BossCheck from './boss'
import CrateLocations from './crates'
import DirtLocations from './dirt'
import EnemyLocations from './enemies'
import FairyLocations from './fairies'
import ChunkyBananas from './gold-bananas/chunky'
import DiddyBananas from './gold-bananas/diddy'
import DkBananas from './gold-bananas/dk'
import LankyBananas from './gold-bananas/lanky'
import TinyBananas from './gold-bananas/tiny/tiny'
import KasplatLocations from './kasplats'
import ChunkyMedal from './medals/ChunkyMedal'
import DiddyMedal from './medals/DiddyMedal'
import DkMedal from './medals/DkMedal'
import LankyMedal from './medals/LankyMedal'
import TinyMedal from './medals/TinyMedal'
import AztecRegionChecks from './regions'
import AztecShops from './shops'
import BoulderLocations from './boulders'
import ShuffledArenas from './arenas/Shuffled'
import ShuffledCrates from './crates/Shuffled'
import ShuffledDirt from './dirt/Shuffled'
import ShuffledFairies from './fairies/Shuffled'
import ShuffledKasplats from './kasplats/Shuffled'
import FDTBalloons from './balloons/5DT'
import LlamaBalloons from './balloons/LlamaTemple'
import MiddleCaveBalloons from './balloons/MiddleCave'
import OasisBalloons from './balloons/Oasis'
import QSCaveBalloons from './balloons/QSCave'
import TTBalloons from './balloons/TinyTemple'
import TotemBalloons from './balloons/Totem'

const ClassicChecks: React.FC = () => {
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
<>
  <div className="grid">
    <DkBananas />
    <DiddyBananas />
    <LankyBananas />
    <TinyBananas />
    <ChunkyBananas />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
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
    <VultureArena />
    <FDTBalloons />
    <LlamaBalloons />
    <MiddleCaveBalloons />
    <OasisBalloons />
    <QSCaveBalloons />
    <TTBalloons />
    <TotemBalloons />
    <DkMedal />
    <DiddyMedal />
    <LankyMedal />
    <TinyMedal />
    <ChunkyMedal />
    <BoulderLocations />
    <BossCheck />
    <AztecShops />
    <DropPool>
      <EnemyLocations />
    </DropPool>
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

const AztecChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <AztecRegionChecks /> : <ClassicChecks />
}

export default AztecChecks
