import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import PaintingFairy from '../fairies/Painting'
import PaintingRoom from '../gold-bananas/lanky/PaintingRoom'
import LankyRoomBalloon from '../balloons/PaintingRoom'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const PaintingRoomChecks: React.FC = () => {
const isFairySeed = useKRoolKontracts('Fairies') ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <PaintingRoom />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <PaintingFairy />
  </div>
  <div className="grid">
    <LankyRoomBalloon />
  </div>
  </>
)
}

export default PaintingRoomChecks
