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
import ShuffledFairies from '../fairies/Shuffled'

const JapesRegionChecks: React.FC = () => (
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
    <JapesStartChecks />
    <PeanutGateChecks />
    <BaboonBlast />
    <JapesMainChecks />
    <TopMountain />
    <HiveTunnelChecks />
    <HiveOutsideChecks />
    <HiveInteriorChecks />
    <StormyTunnelChecks />
    <RambiGateChecks />
    <MineChecks />
    <PaintingRoomChecks />
    <UndergroundChecks />
    <ShopLocations />
    <BossCheck />
    <ShuffledFairies />
  </div>
)

export default JapesRegionChecks
