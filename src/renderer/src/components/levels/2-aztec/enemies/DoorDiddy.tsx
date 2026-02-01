import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatToughEnemy } from '@renderer/hooks/enemies'
import { usePeanut } from '@renderer/hooks/kongs'
import AztecCheck from '../check'

const Diddy5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const peanut = usePeanut()
  const klobberOrKlump = useDefeatToughEnemy()
  return (
    <DropPool>
      <AztecCheck
        id={2331}
        name="Diddy 5DT Start Left Enemy 0"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={door.out && peanut}
      />
      <AztecCheck
        id={2332}
        name="Diddy 5DT Start Left Enemy 1"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={door.out && peanut}
      />
      <AztecCheck
        id={2333}
        name="Diddy 5DT Second Switch Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && peanut}
        canGetBreak={door.out && peanut}
      />
      <AztecCheck
        id={2334}
        name="Diddy 5DT End Trap Enemy 0"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobberOrKlump}
        canGetBreak={door.out && peanut && klobberOrKlump}
      />
      <AztecCheck
        id={2335}
        name="Diddy 5DT End Trap Enemy 1"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobberOrKlump}
        canGetBreak={door.out && peanut && klobberOrKlump}
      />
      <AztecCheck
        id={2336}
        name="Diddy 5DT End Trap Enemy 2"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobberOrKlump}
        canGetBreak={door.out && peanut && klobberOrKlump}
      />
      <AztecCheck
        id={2337}
        name="Enemy at Diddy 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && peanut && klobberOrKlump}
        canGetBreak={door.out && peanut && klobberOrKlump}
      />
    </DropPool>
  )
}

export default Diddy5Enemies
