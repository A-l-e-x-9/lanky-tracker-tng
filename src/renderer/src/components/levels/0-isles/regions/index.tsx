import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BananaMedalPool, { IslesMedalPool } from '@renderer/components/pools/BananaMedals'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import JetpacCheck from '../jetpac'
import ShopLocations from '../shops'
import AztecLobbyChecks from './AztecLobby'
import CastleLobbyChecks from './CastleLobby'
import CavesLobbyChecks from './CavesLobby'
import DiddyAirspaceChecks from './DiddyAirspace'
import FactoryLobbyChecks from './FactoryLobby'
import ForestLobbyChecks from './ForestLobby'
import GalleonLobbyChecks from './GalleonLobby'
import HelmLobbyChecks from './HelmLobby'
import IslesMainChecks from './IslesMain'
import IslesMainUpperChecks from './IslesMainUpper'
import JapesLobbyChecks from './JapesLobby'
import KremBaseChecks from './KremBase'
import KremLiftChecks from './KremLiftChecks'
import KremTopChecks from './KremTop'
import OuterIslesChecks from './OuterIsles'
import PrisonChecks from './Prison'
import SnideRoomChecks from './SnideRoom'
import TrainingGroundsChecks from './TrainingGrounds'
import FairyReward from '../fairies/FairyReward'
import DKIslandArenas from '../arenas/DKIsland'
import DKIslandCrates from '../crates/DKIsland'
import DKIslandDirt from '../dirt/DKIsland'
import DKIslandFairies from '../fairies/DKIsland'
import DKIslandKasplats from '../kasplats/DKIsland'
import KremIslandArenas from '../arenas/KremIsland'
import KremIslandCrates from '../crates/KremIsland'
import KremIslandDirt from '../dirt/KremIsland'
import KremIslandFairies from '../fairies/KremIsland'
import KremIslandKasplats from '../kasplats/KremIsland'
import OuterArenas from '../arenas/OuterRim'
import OuterCrates from '../crates/OuterRim'
import OuterDirt from '../dirt/OuterRim'
import OuterFairies from '../fairies/OuterRim'
import OuterKasplats from '../kasplats/OuterRim'

const IslesRegionChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
<>
  <div className="grid">
    <BananaMedalPool>
      <IslesMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
      </IslesMedalPool>
    </BananaMedalPool>
    <TrainingGroundsChecks />
  </div>
    <IslesMainChecks />
    <IslesMainUpperChecks />
  <div className="grid">
    <DiddyAirspaceChecks />
    <DKIslandArenas />
    <DKIslandCrates />
    <DKIslandDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <DKIslandFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DKIslandKasplats />
  </div>
  <div className="grid">
    <PrisonChecks />
  </div>
    <KremBaseChecks />
    <KremLiftChecks />
  <div className="grid">
    <SnideRoomChecks />
  </div>
    <KremTopChecks />
  <div className="grid">
    <KremIslandArenas />
    <KremIslandCrates />
    <KremIslandDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <KremIslandFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <KremIslandKasplats />
  </div>
    <OuterIslesChecks />
  <div className="grid">
    <OuterArenas />
    <OuterCrates />
    <OuterDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <OuterFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <OUterKasplats />
  </div>
    <JapesLobbyChecks />
  <div className="grid">
    <AztecLobbyChecks />
  </div>
    <FactoryLobbyChecks />
    <GalleonLobbyChecks />
    <ForestLobbyChecks />
    <CavesLobbyChecks />
    <CastleLobbyChecks />
    <HelmLobbyChecks />
  <div className="grid">
    <ShopLocations />
    <FairyReward />
    <JetpacCheck />
  </div>
  </>
)
}

export default IslesRegionChecks
