import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatKaboom, useDefeatPurpleKlaptrap } from '@renderer/hooks/enemies'
import { useCoconut, useCamera } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const Dk5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const coconut = useCoconut()
  const kaboom = useDefeatKaboom()
  const klaptrap = useDefeatPurpleKlaptrap()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2319}
        name="Aztec Enemy: DK 5DT Start Trap 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2320}
        name="Aztec Enemy: DK 5DT Start Trap 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2321}
        name="Aztec Enemy: DK 5DT Start Trap 2"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2322}
        name="Aztec Enemy: DK 5DT End Trap 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2323}
        name="Aztec Enemy: DK 5DT End Trap 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2324}
        name="Aztec Enemy: DK 5DT End Trap 2"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2325}
        name="Aztec Enemy: DK 5DT End Path 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap}
        canGetBreak={logicBreak(door) && coconut && klaptrap}
      />
      <AztecCheck
        id={2326}
        name="Aztec Enemy: DK 5DT End Path 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap}
        canGetBreak={logicBreak(door) && coconut && klaptrap}
      />
      <AztecCheck
        id={2327}
        name="Aztec Enemy: DK 5DT Start Path"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap}
        canGetBreak={logicBreak(door) && coconut && klaptrap}
      />
      <AztecCheck
        id={2419}
        name="Aztec Enemy Photo: DK 5DT Start Trap 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && hasFairyCam}
        canGetBreak={logicBreak(door) && coconut && hasFairyCam}
      />
      <AztecCheck
        id={2420}
        name="Aztec Enemy Photo: DK 5DT Start Trap 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && hasFairyCam}
        canGetBreak={logicBreak(door) && coconut && hasFairyCam}
      />
      <AztecCheck
        id={2421}
        name="Aztec Enemy Photo: DK 5DT Start Trap 2"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && hasFairyCam}
        canGetBreak={logicBreak(door) && coconut && hasFairyCam}
      />
      <AztecCheck
        id={2422}
        name="Aztec Enemy Photo: DK 5DT End Trap 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && hasFairyCam}
        canGetBreak={logicBreak(door) && coconut && hasFairyCam}
      />
      <AztecCheck
        id={2423}
        name="Aztec Enemy Photo: DK 5DT End Trap 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && hasFairyCam}
        canGetBreak={logicBreak(door) && coconut && hasFairyCam}
      />
      <AztecCheck
        id={2424}
        name="Aztec Enemy Photo: DK 5DT End Trap 2"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && hasFairyCam}
        canGetBreak={logicBreak(door) && coconut && hasFairyCam}
      />
      <AztecCheck
        id={2425}
        name="Aztec Enemy Photo: DK 5DT End Path 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap && hasFairyCam}
        canGetBreak={logicBreak(door) && coconut && klaptrap && hasFairyCam}
      />
      <AztecCheck
        id={2426}
        name="Aztec Enemy Photo: DK 5DT End Path 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap && hasFairyCam}
        canGetBreak={logicBreak(door) && coconut && klaptrap && hasFairyCam}
      />
      <AztecCheck
        id={2427}
        name="Aztec Enemy Photo: DK 5DT Start Path"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap && hasFairyCam}
        canGetBreak={logicBreak(door) && coconut && klaptrap && hasFairyCam}
      />
    </DropPool>
  )
}

export default Dk5Enemies
