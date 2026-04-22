import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossCheck from '../boss'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import StartEnemies from '../enemies/Start'
import TestingChecks from './Testing'
import RNDChecks from './Research'
import StorageChecks from './Storage'
import ProductionChecks from './Production'
import StartArenas from '../arenas/Start'
import StartCrates from '../crates/Start'
import StartDirt from '../dirt/Start'
import StartFairies from '../fairies/Start'
import StartKasplats from '../kasplats/Start'
import StarcadeArenas from '../arenas/Starcade'
import StarcadeCrates from '../crates/Starcade'
import StarcadeDirt from '../dirt/Starcade'
import StarcadeFairies from '../fairies/Starcade'
import StarcadeKasplats from '../kasplats/Starcade'

const FactoryRegionChecks: React.FC = () => {
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
  <div className={`grid ${isKremKaptureSeed}`}>
    <StartEnemies />
  </div>
  <div className="grid">
    <StartArenas />
    <StartCrates />
    <StartDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <StartFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <StartKasplats />
  </div>
    <TestingChecks />
    <RNDChecks />
    <StorageChecks />
  <div className="grid">
    <StarcadeArenas />
    <StarcadeCrates />
    <StarcadeDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <StarcadeFairies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <StarcadeKasplats />
  </div>
    <ProductionChecks />
  <div className="grid">
    <ShopLocations />
    <BossCheck />
  </div>
</>
)
}

export default FactoryRegionChecks
