import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import PaintingFairy from '../fairies/Painting'
import PaintingRoom from '../gold-bananas/lanky/PaintingRoom'

const PaintingRoomChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className={`grid ${isKremKaptureSeed}`}>
    <PaintingRoom />
  </div>
  <div className="grid">
    <PaintingFairy />
  </div>
  </>
)
}

export default PaintingRoomChecks
