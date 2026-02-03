import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import TreeEnemies from '../enemies/Tree'
import TreeFairy from '../fairies/Tree'
import ChunkyTree from '../gold-bananas/chunky/Tree'
import DkTree from '../gold-bananas/dk/Tree'
import DkKasplat from '../kasplats/Dk'

const TreeChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <ChunkyTree />
    <DkTree />
    <TreeFairy />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DkKasplat />
    <TreeEnemies />
  </div>
  </>
)
}

export default TreeChecks
