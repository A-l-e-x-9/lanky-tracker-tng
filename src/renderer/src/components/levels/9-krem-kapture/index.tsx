import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import KremKapture from './enemy-list'

const KKChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
  return (
    <div className={`grid ${isKremKaptureSeed}`}>
      <KremKapture />
    </div>
  )
}

export default KKChecks
