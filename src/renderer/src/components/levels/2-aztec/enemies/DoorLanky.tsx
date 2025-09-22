import DropPool from '@renderer/src/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/src/hooks/aztec'
import { useDefeatKlump } from '@renderer/src/hooks/enemies'
import { useGrape, useCamera } from '@renderer/src/hooks/kongs'
import { logicBreak } from '@renderer/src/hooks/world'
import AztecCheck from '../check'

const Lanky5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const grape = useGrape()
  const klump = useDefeatKlump()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2335}
        name="Aztec Enemy: Lanky 5DT Joining Paths"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump}
        canGetBreak={logicBreak(door) && grape && klump}
      />
      <AztecCheck
        id={2336}
        name="Aztec Enemy: Lanky 5DT End Trap"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump}
        canGetBreak={logicBreak(door) && grape && klump}
      />
      <AztecCheck
        id={2337}
        name="Aztec Enemy: Lanky 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump}
        canGetBreak={logicBreak(door) && grape && klump}
      />
      <AztecCheck
        id={2435}
        name="Aztec Enemy Photo: Lanky 5DT Joining Paths"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump && hasFairyCam}
        canGetBreak={logicBreak(door) && grape && klump && hasFairyCam}
      />
      <AztecCheck
        id={2436}
        name="Aztec Enemy Photo: Lanky 5DT End Trap"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump && hasFairyCam}
        canGetBreak={logicBreak(door) && grape && klump && hasFairyCam}
      />
      <AztecCheck
        id={2437}
        name="Aztec Enemy Photo: Lanky 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && grape && klump && hasFairyCam}
        canGetBreak={logicBreak(door) && grape && klump && hasFairyCam}
      />
    </DropPool>
  )
}

export default Lanky5Enemies
