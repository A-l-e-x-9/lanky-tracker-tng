import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatKlobber, useDefeatKlump } from '@renderer/hooks/enemies'
import { usePeanut } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const Diddy5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const peanut = usePeanut()
  const klobber = useDefeatKlobber()
  const klump = useDefeatKlump()
  return (
    <DropPool>
      <AztecCheck
        id={2331}
        name="Diddy 5DT Start Left Enemy 0"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={logicBreak(door) && peanut}
      />
      <AztecCheck
        id={2332}
        name="Diddy 5DT Start Left Enemy 1"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={logicBreak(door) && peanut}
      />
      <AztecCheck
        id={2333}
        name="Diddy 5DT Second Switch Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={logicBreak(door) && peanut}
      />
      <AztecCheck
        id={2334}
        name="Diddy 5DT End Trap Enemy 0"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobber}
        canGetBreak={logicBreak(door) && peanut && klobber}
      />
      <AztecCheck
        id={2335}
        name="Diddy 5DT End Trap Enemy 1"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobber}
        canGetBreak={logicBreak(door) && peanut && klobber}
      />
      <AztecCheck
        id={2336}
        name="Diddy 5DT End Trap Enemy 2"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobber}
        canGetBreak={logicBreak(door) && peanut && klobber}
      />
      <AztecCheck
        id={2337}
        name="Enemy at Diddy 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klump}
        canGetBreak={logicBreak(door) && peanut && klump}
      />
    </DropPool>
  )
}

export default Diddy5Enemies
