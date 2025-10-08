import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useChunky } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const MuseumEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const chunky = useChunky()
  const kosha = useDefeatKosha()
  return (
    <DropPool>
      <CastleCheck
        id={7361}
        name="Enemy at Museum Start"
        region="Various Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && kosha.in}
        canGetBreak={inStage && chunky && canSlam && kosha.out}
      />
      <CastleCheck
        id={7362}
        name="Museum Enemy 0"
        region="Various Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7363}
        name="Museum Enemy 1"
        region="Various Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7364}
        name="Museum Enemy 2"
        region="Various Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7365}
        name="Museum Enemy 3"
        region="Various Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
    </DropPool>
  )
}

export default MuseumEnemies
