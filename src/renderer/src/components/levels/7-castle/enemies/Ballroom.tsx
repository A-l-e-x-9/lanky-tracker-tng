import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useDiddy, useCamera } from '@renderer/hooks/kongs'
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
        name="Ballroom Start Enemy"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && kosha.in}
        canGetBreak={inStage && diddy && canSlam && kosha.out}
      />
      <CastleCheck
        id={7413}
        name="Ballroom Start Enemy Photo"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && hasFairyCam}
      />
    </DropPool>
  )
}

export default BallroomEnemies
