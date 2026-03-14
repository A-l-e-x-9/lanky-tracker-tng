import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FunkyCrate from '../crates/Funky'
import TestingEnemies from '../enemies/Testing'
import FunkyFairy from '../fairies/Funky'
import NumberFairy from '../fairies/Number'
import BlockTower from '../gold-bananas/diddy/Block'
import NumberGame from '../gold-bananas/dk/Number'
import TestingBarrel from '../gold-bananas/lanky/Testing'
import TinyDartboard from '../gold-bananas/tiny/Dart'
import ChunkyKasplat from '../kasplats/Chunky'

const TestingChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <FunkyCrate />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <FunkyFairy />
  </div>
  <div className="grid">
    <BlockTower />
    <TinyDartboard />
    <TestingBarrel />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <NumberFairy />
  </div>
  <div className="grid">
    <NumberGame />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <ChunkyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <TestingEnemies />
  </div>
  </>
)
}

export default TestingChecks
