import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BallroomEnemies from '../enemies/Ballroom'
import RoomFairy from '../fairies/Room'
import DiddyBallroom from '../gold-bananas/diddy/Ballroom'
import TinyRace from '../gold-bananas/tiny/Race'

const BallroomChecks: React.FC = () => {
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <BallroomEnemies />
    <DiddyBallroom />
    <TinyRace />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <RoomFairy />
  </div>
  </>
)
}

export default BallroomChecks
