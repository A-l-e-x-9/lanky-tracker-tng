import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BeforeOasisEnemies from '../enemies/BeforeOasis'
import VaseBanana from '../gold-bananas/chunky/Vase'
import DkKasplat from '../kasplats/Dk'
import CircleVase from '../boulders/CircleVase'
import ColonVase from '../boulders/ColonVase'
import PlusVase from '../boulders/PlusVase'
import TriangleVase from '../boulders/TriangleVase'

const BeforeOasisChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CircleVase />
    <ColonVase />
    <PlusVase />
    <TriangleVase />
    <VaseBanana />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <BeforeOasisEnemies />
  </div>
  </>
)
}

export default BeforeOasisChecks
