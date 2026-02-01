import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import ShuffledArenas from '../arenas/Shuffled'
import BossCheck from '../boss'
import ShuffledCrates from '../crates/Shuffled'
import ShuffledDirtLocations from '../dirt/Shuffled'
import ShuffledFairies from '../fairies/Shuffled'
import QuicksandTunnel from '../gold-bananas/dk/Quicksand'
import ShuffledKasplats from '../kasplats/Shuffled'
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

const AztecRegionChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
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
  </div>
    <OasisChecks />
    <TotemChecks />
    <TinyStartChecks />
    <TinySwimChecks />
    <DoorTempleChecks />
    <LlamaTempleChecks />
  <div className="grid">
    <ShopLocations />
    <BossCheck />
    <ShuffledArenas />
    <ShuffledCrates />
    <ShuffledDirtLocations />
    <ShuffledFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <ShuffledKasplats />
  </div>
</>
)
}

export default AztecRegionChecks
