import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import RambiCrate from '../crates/Rambi'
import RambiFairy from '../fairies/Rambi'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const RambiGateChecks: React.FC = () => {
const isFairySeed = useKRoolKontracts('Fairies') ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <RambiCrate />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <RambiFairy />
  </div>
  </>
)
}

export default RambiGateChecks
