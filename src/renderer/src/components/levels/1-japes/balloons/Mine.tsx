import BalloonPool from '@renderer/components/pools/Balloons'
import JapesCheck from '../check'
import { useJapesMine, useSlamJapes } from '@renderer/hooks/japes'
import { usePeanut } from '@renderer/hooks/kongs' //Season 6's new Free Trade Agreement mechanics mean you don't NEED to have Peanuts to get this balloon, but you still need to have it to get into his mine. D:

const DiddyConveyorBalloon: React.FC = () => {
const canReachMtn = useJapesMine()
const hasPeanuts = usePeanut()
const hasASlam = useSlamJapes()
  return (
    <BalloonPool>
      <JapesCheck
        id={16912}
        name="Diddy's balloon at the conveyor belts"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in && hasPeanuts && hasASlam}
        canGetBreak={canReachMtn.out && hasPeanuts && hasASlam}
      />
    </BalloonPool>
  )
}

export default DiddyConveyorBalloon
