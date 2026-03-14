import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import DiddyGold from '../gold-bananas/diddy/Gold'
import LankyGold from '../gold-bananas/lanky/Gold'
import TreasureClams from '../gold-bananas/tiny/Clams'
import DkKasplat from '../kasplats/Dk'

const TreasureChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <DiddyGold />
    <LankyGold />
    <TreasureClams />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
  </div>
  </>
)
}

export default TreasureChecks
