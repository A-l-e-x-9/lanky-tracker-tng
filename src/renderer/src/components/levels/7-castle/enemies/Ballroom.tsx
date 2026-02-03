import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useDefeatToughEnemy } from '@renderer/hooks/enemies'
import { useDiddy } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const BallroomEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const diddy = useDiddy()
  const kosha = useDefeatToughEnemy()
  return (
    <DropPool>
      <CastleCheck
        id={7313}
        name="Ballroom Start Enemy"
        region="Various Castle Rooms"
        canGetLogic={inStage.in && diddy && canSlam && kosha}
        canGetBreak={inStage.out && diddy && canSlam && kosha}
      />
    </DropPool>
  )
}

export default BallroomEnemies
