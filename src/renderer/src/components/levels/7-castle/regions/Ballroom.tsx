import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BallroomEnemies from '../enemies/Ballroom'
import RoomFairy from '../fairies/Room'
import DiddyBallroom from '../gold-bananas/diddy/Ballroom'
import TinyRace from '../gold-bananas/tiny/Race'

const BallroomChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <>
  <div className={`grid ${isKremKaptureSeed}`}>
    <BallroomEnemies />
    <DiddyBallroom />
  </div>
  <div className="grid">
    <TinyRace />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <RoomFairy />
  </div>
  </>
)
}

export default BallroomChecks
