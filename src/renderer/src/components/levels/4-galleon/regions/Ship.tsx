import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ShipFairy from '../fairies/Ship'
import Chunky5Ship from '../gold-bananas/chunky/Ship'
import Diddy5Ship from '../gold-bananas/diddy/Ship'
import Dk5Ship from '../gold-bananas/dk/Ship'
import Lanky5Ship from '../gold-bananas/lanky/Ship'
import Tiny5Ship from '../gold-bananas/tiny/Ship'

const FiveShipChecks: React.FC = () => {
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <>
    <div className="grid">
      <Dk5Ship />
      <Diddy5Ship />
      <Lanky5Ship />
      <Tiny5Ship />
      <Chunky5Ship />
    </div>
    <div className={`grid ${isFairySeed && fairiesInRotation}`}>
      <ShipFairy />
    </div>
  </>
)
}

export default FiveShipChecks
