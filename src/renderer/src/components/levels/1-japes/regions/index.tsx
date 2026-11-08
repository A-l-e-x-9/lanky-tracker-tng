import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
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
import MineArenas from '../arenas/Mine'
import MineCrates from '../crates/Mine'
import MineDirt from '../dirt/Mine'
import MineFairies from '../fairies/Mine'
import MineKasplats from '../kasplats/Mine'
import HiveArenas from '../arenas/Hive'
import HiveCrates from '../crates/Hive'
import HiveDirt from '../dirt/Hive'
import HiveFairies from '../fairies/Hive'
import HiveKasplats from '../kasplats/Hive'
import StormyArenas from '../arenas/Stormy'
import StormyCrates from '../crates/Stormy'
import StormyDirt from '../dirt/Stormy'
import StormyFairies from '../fairies/Stormy'
import StormyKasplats from '../kasplats/Stormy'
import LowlandBalloons from '../balloons/Lowlands'
import HillsideBalloons from '../balloons/Hillside'
import StormyBalloons from '../balloons/Stormy'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const JapesRegionChecks: React.FC = () => {
const isFairySeed = useKRoolKontracts('Fairies') ? 'foolish' : ''
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
<>
  <div className="grid">
    <DkMedal />
    <DiddyMedal />
    <LankyMedal />
    <TinyMedal />
    <ChunkyMedal />
    <JapesStartChecks />
    <PeanutGateChecks />
    <BaboonBlast />
    <LowlandArenas />
    <LowlandBalloons />
    <LowlandCrates />
    <LowlandDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <LowlandFairies />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <LowlandKasplats />
  </div>
  <div className="grid">
    <JapesMainChecks />
    <TopMountain />
    <HillsideArenas />
    <HillsideBalloons />
    <HillsideCrates />
    <HillsideDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <HillsideFairies />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <HillsideKasplats />
  </div>
    <HiveTunnelChecks />
  <div className="grid">
    <HiveOutsideChecks />
    <HiveInteriorChecks />
    <HiveArenas />
    <HiveCrates />
    <HiveDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <HiveFairies />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <HiveKasplats />
  </div>
    <StormyTunnelChecks />
    <RambiGateChecks />
  <div className="grid">
    <StormyArenas />
    <StormyBalloons />
    <StormyCrates />
    <StormyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <StormyFairies />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <StormyKasplats />
    <MineChecks />
  </div>
    <PaintingRoomChecks />
    <UndergroundChecks />
  <div className="grid">
    <MineArenas />
    <MineCrates />
    <MineDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <MineFairies />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <MineKasplats />
  </div>
  <div className="grid">
    <ShopLocations />
    <BossCheck />
  </div>
</>
)
}

export default JapesRegionChecks
