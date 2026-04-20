import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossCheck from '../boss'
import QuicksandTunnel from '../gold-bananas/dk/Quicksand'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import BeforeOasisChecks from './BeforeOasis'
import ConnectorTunnelChecks from './Connector'
import DoorTempleChecks from './DoorTemple'
import LlamaTempleChecks from './Llama'
import OasisChecks from './Oasis'
import TinyStartChecks from './TinyStart'
import TinySwimChecks from './TinySwim'
import TotemChecks from './Totem'
import CaveArenas from '../arenas/Cave'
import CaveCrates from '../crates/Cave'
import CaveDirt from '../dirt/Cave'
import CaveFairies from '../fairies/Cave'
import CaveKasplats from '../kasplats/Cave'
import AztecMainArenas from '../arenas/AztecMain'
import AztecMainCrates from '../crates/AztecMain'
import AztecMainDirt from '../dirt/AztecMain'
import AztecMainFairies from '../fairies/AztecMain'
import AztecMainKasplats from '../kasplats/AztecMain'

const AztecRegionChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
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
    <BeforeOasisChecks />
    <ConnectorTunnelChecks />
  <div className="grid">
    <QuicksandTunnel />
    <CaveArenas />
    <CaveCrates />
    <CaveDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <CaveFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <CaveKasplats />
  </div>
    <OasisChecks />
    <TotemChecks />
  <div className="grid">
    <AztecMainArenas />
    <AztecMainCrates />
    <AztecMainDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <AztecMainFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <AztecMainKasplats />
  </div>
    <TinyStartChecks />
    <TinySwimChecks />
    <DoorTempleChecks />
    <LlamaTempleChecks />
  <div className="grid">
    <ShopLocations />
    <BossCheck />
  </div>
</>
)
}

export default AztecRegionChecks
