import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useDiddy } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const BallroomEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const diddy = useDiddy()
  const kosha = useDefeatKosha()
  return (
    <DropPool>
      <CastleCheck
        id={7313}
        name="Ballroom Start Enemy"
        region="Various Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && kosha.in}
        canGetBreak={inStage && diddy && canSlam && kosha.out}
      />
    </DropPool>
  )
}

export default BallroomEnemies
