import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import OasisDirt from '../dirt/Oasis'
import OasisEnemies from '../enemies/Oasis'
import FreeLlama from '../gold-bananas/dk/FreeLlama'
import DiddyKasplat from '../kasplats/Diddy'

const OasisChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <FreeLlama />
    <OasisDirt />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DiddyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <OasisEnemies />
  </div>
  </>
)
}

export default OasisChecks
