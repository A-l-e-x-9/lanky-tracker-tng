import BananaMedalPool from '@renderer/components/pools/BananaMedals'
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

const IslesRegionChecks: React.FC = () => (
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <TrainingGroundsChecks />
    <IslesMainChecks />
    <IslesMainUpperChecks />
    <DiddyAirspaceChecks />
    <OuterIslesChecks />
    <PrisonChecks />
    <KremBaseChecks />
    <KremLiftChecks />
    <SnideRoomChecks />
    <KremTopChecks />
    <JapesLobbyChecks />
    <AztecLobbyChecks />
    <FactoryLobbyChecks />
    <GalleonLobbyChecks />
    <ForestLobbyChecks />
    <CavesLobbyChecks />
    <CastleLobbyChecks />
    <HelmLobbyChecks />
    <ShopLocations />
    <JetpacCheck />
  </div>
)

export default IslesRegionChecks
