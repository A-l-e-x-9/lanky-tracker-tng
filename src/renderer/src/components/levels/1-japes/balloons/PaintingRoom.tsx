import BalloonPool from '@renderer/components/pools/Balloons'
import { useJapesPainting } from '@renderer/hooks/japes'
import { useAnyGun } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const LankyRoomBalloon: React.FC = () => {
const canDo = useJapesPainting()
const hasAGun = useAnyGun()
return (
  <BalloonPool>
    <JapesCheck
      id={16913}
      name="Lanky balloon above the exit to his painting room"
      region="Japes Caves and Mines"
      canGetLogic={canDo.in && hasAGun}
      canGetBreak={canDo.out && hasAGun}
    />
  </BalloonPool>
)
}

export default LankyRoomBalloon
