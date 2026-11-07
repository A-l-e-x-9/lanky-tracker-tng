import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import UpperKremFairy from '../fairies/UpperKrem'
import SaxPad from '../gold-bananas/tiny/SaxPad'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const KremTopChecks: React.FC = () => {
const isFairySeed = useKRoolKontracts('Fairies') ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <SaxPad />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <UpperKremFairy />
  </div>
  </>
)
}

export default KremTopChecks
