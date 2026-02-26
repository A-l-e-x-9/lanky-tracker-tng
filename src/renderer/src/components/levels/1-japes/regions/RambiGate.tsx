import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import RambiCrate from '../crates/Rambi'
import RambiFairy from '../fairies/Rambi'

const RambiGateChecks: React.FC = () => {
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <RambiCrate />
    <RambiFairy />
  </div>
)
}

export default RambiGateChecks
