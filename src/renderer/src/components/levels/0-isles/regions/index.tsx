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
import ShuffledArenas from '../arenas/Shuffled'
import ShuffledCrates from '../crates/Shuffled'
import ShuffledDirt from '../dirt/Shuffled'
import ShuffledFairies from '../fairies/Shuffled'

const IslesRegionChecks: React.FC = () => (
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
    <OuterIslesChecks />
    <PrisonChecks />
  </div>
    <KremBaseChecks />
    <KremLiftChecks />
  <div className="grid">
    <SnideRoomChecks />
    <KremTopChecks />
  </div>
    <JapesLobbyChecks />
  <div className="grid">
    <AztecLobbyChecks />
  </div>
    <FactoryLobbyChecks />
    <GalleonLobbyChecks />
  <div className="grid">
    <ForestLobbyChecks />
  </div>
    <CavesLobbyChecks />
    <CastleLobbyChecks />
    <HelmLobbyChecks />
  <div className="grid">
    <ShopLocations />
    <FairyReward />
    <JetpacCheck />
    <ShuffledArenas />
    <ShuffledCrates />
    <ShuffledDirt />
    <ShuffledFairies />
  </div>
  </>
)

export default IslesRegionChecks
