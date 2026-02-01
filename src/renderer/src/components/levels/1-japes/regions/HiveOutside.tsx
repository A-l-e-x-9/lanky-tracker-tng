import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import HiveOutsideEnemies from '../enemies/HiveOutside'
import HiveBarrel from '../gold-bananas/chunky/HiveBarrel'
import HiveStump from '../gold-bananas/tiny/HiveStump'

const HiveOutsideChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <HiveStump />
    <HiveBarrel />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>  
    <HiveOutsideEnemies />
  </div>
  </>
)
}

export default HiveOutsideChecks
