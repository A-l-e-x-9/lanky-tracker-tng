import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CaveEnemies from '../enemies/Caves'
import Minecart from '../gold-bananas/diddy/Minecart'

const MineChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <Minecart />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <CaveEnemies />
  </div>
  </>
)
}

export default MineChecks
