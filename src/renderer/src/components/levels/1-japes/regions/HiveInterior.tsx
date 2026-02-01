import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import HiveInteriorEnemies from '../enemies/HiveInterior'
import HiveInside from '../gold-bananas/tiny/HiveInside'

const HiveInteriorChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <HiveInside />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <HiveInteriorEnemies />
  </div>
  </>
)
}

export default HiveInteriorChecks
