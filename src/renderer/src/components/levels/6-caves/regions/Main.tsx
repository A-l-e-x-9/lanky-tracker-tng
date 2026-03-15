import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import MainEnemies from '../enemies/Main'
import EarlyGone from '../gold-bananas/chunky/Gone'
import WaterfallBarrel from '../gold-bananas/diddy/Waterfall'
import CavesBlast from '../gold-bananas/dk/Blast'
import BeetleRace from '../gold-bananas/lanky/Beetle'
import CastleSlam from '../gold-bananas/lanky/Castle'
import MiniBarrel from '../gold-bananas/tiny/Mini'
import DiddyKasplat from '../kasplats/Diddy'
import DkKasplat from '../kasplats/Dk'
import LankyKasplat from '../kasplats/Lanky'
import KooshyKomeiji from '../boulders/SmallRock'
import Okuu from '../boulders/BeegRock'

const MainChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CavesBlast />
    <WaterfallBarrel />
    <CastleSlam />
    <BeetleRace />
    <MiniBarrel />
    <EarlyGone />
    <KooshyKomeiji />
    <Okuu />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
    <DiddyKasplat />
    <LankyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <MainEnemies />
  </div>
  </>
)
}

export default MainChecks
