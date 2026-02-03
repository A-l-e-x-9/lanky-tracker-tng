import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BallroomEnemies from '../enemies/Ballroom'
import RoomFairy from '../fairies/Room'
import DiddyBallroom from '../gold-bananas/diddy/Ballroom'
import TinyRace from '../gold-bananas/tiny/Race'

const BallroomChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className={`grid ${isKremKaptureSeed}`}>
    <BallroomEnemies />
    <DiddyBallroom />
  </div>
  <div className="grid">
    <TinyRace />
    <RoomFairy />
  </div>
  </>
)
}

export default BallroomChecks
