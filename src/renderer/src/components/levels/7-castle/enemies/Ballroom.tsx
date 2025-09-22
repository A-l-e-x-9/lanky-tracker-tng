import DropPool from '@renderer/src/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/src/hooks/castle'
import { useDefeatKosha } from '@renderer/src/hooks/enemies'
import { useDiddy, useCamera } from '@renderer/src/hooks/kongs'
import CastleCheck from '../check'

const BallroomEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const diddy = useDiddy()
  const kosha = useDefeatKosha()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <CastleCheck
        id={7313}
        name="Castle Enemy: Ballroom Start"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && kosha.in}
        canGetBreak={inStage && diddy && canSlam && kosha.out}
      />
      <CastleCheck
        id={7413}
        name="Castle Enemy Photo: Ballroom Start"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && hasFairyCam}
      />
    </DropPool>
  )
}

export default BallroomEnemies
