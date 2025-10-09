import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatKaboom, useDefeatPurpleKlaptrap } from '@renderer/hooks/enemies'
import { useCoconut } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const Dk5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const coconut = useCoconut()
  const kaboom = useDefeatKaboom()
  const klaptrap = useDefeatPurpleKlaptrap()
  return (
    <DropPool>
      <AztecCheck
        id={2322}
        name="DK 5DT Start Trap Enemy 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2323}
        name="DK 5DT Start Trap Enemy 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2324}
        name="DK 5DT Start Trap Enemy 2"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2325}
        name="Enemy at DK 5DT Start Path"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap}
        canGetBreak={logicBreak(door) && coconut && klaptrap}
      />
      <AztecCheck
        id={2326}
        name="DK 5DT End Path Enemy 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap}
        canGetBreak={logicBreak(door) && coconut && klaptrap}
      />
      <AztecCheck
        id={2327}
        name="DK 5DT End Path Enemy 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && klaptrap}
        canGetBreak={logicBreak(door) && coconut && klaptrap}
      />
      <AztecCheck
        id={2328}
        name="DK 5DT End Trap Enemy 0"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2329}
        name="DK 5DT End Trap Enemy 1"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
      <AztecCheck
        id={2330}
        name="DK 5DT End Trap Enemy 2"
        region="5 Door Temple"
        canGetLogic={door.in && coconut && kaboom.in}
        canGetBreak={logicBreak(door) && coconut && kaboom.out}
      />
    </DropPool>
  )
}

export default Dk5Enemies
