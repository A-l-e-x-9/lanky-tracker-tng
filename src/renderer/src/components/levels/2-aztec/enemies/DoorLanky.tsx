import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatKlump } from '@renderer/hooks/enemies'
import { useGrape } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const Lanky5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const grape = useGrape()
  const klump = useDefeatKlump()
  return (
    <DropPool>
      <AztecCheck
        id={2338}
        name="Aztec Enemy: Lanky 5DT Joining Paths"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump}
        canGetBreak={logicBreak(door) && grape && klump}
      />
      <AztecCheck
        id={2339}
        name="Aztec Enemy: Lanky 5DT End Trap"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump}
        canGetBreak={logicBreak(door) && grape && klump}
      />
      <AztecCheck
        id={2340}
        name="Aztec Enemy: Lanky 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump}
        canGetBreak={logicBreak(door) && grape && klump}
      />
    </DropPool>
  )
}

export default Lanky5Enemies
