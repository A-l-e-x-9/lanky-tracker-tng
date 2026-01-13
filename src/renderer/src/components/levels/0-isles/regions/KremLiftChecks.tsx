import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import KremLiftEnemies from '../enemies/KremLift'
import CoconutCage from '../gold-bananas/dk/CoconutCage'

const KremLiftChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <CoconutCage />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <KremLiftEnemies />
  </div>
  </>
)
}

export default KremLiftChecks
