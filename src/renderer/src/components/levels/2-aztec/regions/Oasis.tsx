import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import OasisDirt from '../dirt/Oasis'
import OasisEnemies from '../enemies/Oasis'
import FreeLlama from '../gold-bananas/dk/FreeLlama'
import DiddyKasplat from '../kasplats/Diddy'
import OasisBalloons from '../balloons/Oasis'

const OasisChecks: React.FC = () => {
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <FreeLlama />
    <OasisDirt />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DiddyKasplat />
  </div>
  <div className="grid">
    <OasisBalloons />
    <OasisEnemies />
  </div>
  </>
)
}

export default OasisChecks
