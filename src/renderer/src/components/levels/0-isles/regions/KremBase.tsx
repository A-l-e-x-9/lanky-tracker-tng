import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import KremBaseEnemies from '../enemies/KremBase'
import GrapeCage from '../gold-bananas/lanky/GrapeCage'

const KremBaseChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <GrapeCage />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <KremBaseEnemies />
  </div>
  </>
)
}

export default KremBaseChecks
