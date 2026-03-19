import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import TreeEnemies from '../enemies/Tree'
import TreeFairy from '../fairies/Tree'
import ChunkyTree from '../gold-bananas/chunky/Tree'
import DkTree from '../gold-bananas/dk/Tree'
import DkKasplat from '../kasplats/Dk'

const TreeChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <ChunkyTree />
    <DkTree />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <TreeFairy />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <TreeEnemies />
  </div>
  </>
)
}

export default TreeChecks
