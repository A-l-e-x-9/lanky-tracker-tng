import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossCheck from '../boss'
import TopMountain from '../gold-bananas/diddy/TopMountain'
import BaboonBlast from '../gold-bananas/dk/BaboonBlast'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import HiveInteriorChecks from './HiveInterior'
import HiveOutsideChecks from './HiveOutside'
import HiveTunnelChecks from './HiveTunnel'
import JapesMainChecks from './JapesMain'
import JapesStartChecks from './JapesStart'
import MineChecks from './Mine'
import PaintingRoomChecks from './PaintingRoom'
import PeanutGateChecks from './PeanutGate'
import RambiGateChecks from './RambiGate'
import UndergroundChecks from './Underground'
import StormyTunnelChecks from './StormyTunnel'
import LowlandArenas from '../arenas/Lowlands'
import LowlandCrates from '../crates/Lowlands'
import LowlandDirt from '../dirt/Lowlands'
import LowlandFairies from '../fairies/Lowlands'
import LowlandKasplats from '../kasplats/Lowlands'
import HillsideArenas from '../arenas/Hillside'
import HillsideCrates from '../crates/Hillside'
import HillsideDirt from '../dirt/Hillside'
import HillsideFairies from '../fairies/Hillside'
import HillsideKasplats from '../kasplats/Hillside'

const JapesRegionChecks: React.FC = () => {
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
    <JapesStartChecks />
    <PeanutGateChecks />
  <div className="grid">
    <BaboonBlast />
    <LowlandArenas />
    <LowlandCrates />
    <LowlandDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <LowlandFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <LowlandKasplats />
  </div>
    <JapesMainChecks />
  <div className="grid">
    <TopMountain />
    <HillsideArenas />
    <HillsideCrates />
    <HillsideDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <HillsideFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <HillsideKasplats />
  </div>
    <HiveTunnelChecks />
    <HiveOutsideChecks />
    <HiveInteriorChecks />
    <StormyTunnelChecks />
    <RambiGateChecks />
    <MineChecks />
    <PaintingRoomChecks />
    <UndergroundChecks />
  <div className="grid">
    <ShopLocations />
    <BossCheck />
  </div>
</>
)
}

export default JapesRegionChecks
