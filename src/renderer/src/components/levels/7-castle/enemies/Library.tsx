import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useDefeatBat } from '@renderer/hooks/enemies'
import { useDk } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const LibraryEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const dk = useDk()
  const bat = useDefeatBat()
  return (
    <DropPool>
      <CastleCheck
        id={7357}
        name="Library Entrance Enemy Left 0"
        region="Various Castle Rooms"
        canGetLogic={inStage.in && dk && canSlam && bat.in}
        canGetBreak={inStage.out && dk && canSlam && bat.out}
      />
      <CastleCheck
        id={7358}
        name="Library Entrance Enemy Left 1"
        region="Various Castle Rooms"
        canGetLogic={inStage.in && dk && canSlam && bat.in}
        canGetBreak={inStage.out && dk && canSlam && bat.out}
      />
      <CastleCheck
        id={7359}
        name="Library Entrance Enemy Center"
        region="Various Castle Rooms"
        canGetLogic={inStage.in && dk && canSlam && bat.in}
        canGetBreak={inStage.out && dk && canSlam && bat.out}
      />
      <CastleCheck
        id={7360}
        name="Library Entrance Enemy Right"
        region="Various Castle Rooms"
        canGetLogic={inStage.in && dk && canSlam && bat.in}
        canGetBreak={inStage.out && dk && canSlam && bat.out}
      />
    </DropPool>
  )
}

export default LibraryEnemies
