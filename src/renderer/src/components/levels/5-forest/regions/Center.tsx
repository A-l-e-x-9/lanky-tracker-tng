import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CenterEnemies from '../enemies/Center'
import ChunkyMinecart from '../gold-bananas/chunky/Minecart'

const CenterChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <ChunkyMinecart />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <CenterEnemies />
  </div>
  </>
)
}

export default CenterChecks
