import DropPool from '@renderer/src/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/src/hooks/aztec'
import { useDefeatKlobber, useDefeatZinger } from '@renderer/src/hooks/enemies'
import { usePineapple, useCamera } from '@renderer/src/hooks/kongs'
import { logicBreak } from '@renderer/src/hooks/world'
import AztecCheck from '../check'

const Chunky5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const pineapple = usePineapple()
  const zinger = useDefeatZinger()
  const klobber = useDefeatKlobber()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2346}
        name="Aztec Enemy: Chunky 5DT Start Right"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2347}
        name="Aztec Enemy: Chunky 5DT Start Left"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2348}
        name="Aztec Enemy: Chunky 5DT Second Right"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2349}
        name="Aztec Enemy: Chunky 5DT Second Left"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2350}
        name="Aztec Enemy: Chunky 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && zinger.in}
        canGetBreak={logicBreak(door) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2446}
        name="Aztec Enemy Photo: Chunky 5DT Start Right"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber && hasFairyCam}
        canGetBreak={logicBreak(door) && pineapple && klobber && hasFairyCam}
      />
      <AztecCheck
        id={2447}
        name="Aztec Enemy Photo: Chunky 5DT Start Left"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber && hasFairyCam}
        canGetBreak={logicBreak(door) && pineapple && klobber && hasFairyCam}
      />
      <AztecCheck
        id={2448}
        name="Aztec Enemy Photo: Chunky 5DT Second Right"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber && hasFairyCam}
        canGetBreak={logicBreak(door) && pineapple && klobber && hasFairyCam}
      />
      <AztecCheck
        id={2449}
        name="Aztec Enemy Photo: Chunky 5DT Second Left"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber && hasFairyCam}
        canGetBreak={logicBreak(door) && pineapple && klobber && hasFairyCam}
      />
      <AztecCheck
        id={2450}
        name="Aztec Enemy Photo: Chunky 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && hasFairyCam}
        canGetBreak={logicBreak(door) && pineapple && hasFairyCam}
      />
    </DropPool>
  )
}

export default Chunky5Enemies
