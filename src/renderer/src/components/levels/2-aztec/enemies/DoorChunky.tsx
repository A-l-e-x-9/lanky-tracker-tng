import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatToughEnemy, useDefeatZinger } from '@renderer/hooks/enemies'
import { usePineapple } from '@renderer/hooks/kongs'
import AztecCheck from '../check'

const Chunky5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const pineapple = usePineapple()
  const zinger = useDefeatZinger()
  const klobber = useDefeatToughEnemy()
  return (
    <DropPool>
      <AztecCheck
        id={2349}
        name="Chunky 5DT Start Left Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={door.out && pineapple && klobber}
      />
      <AztecCheck
        id={2350}
        name="Chunky 5DT Start Right Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={door.out && pineapple && klobber}
      />
      <AztecCheck
        id={2351}
        name="Chunky 5DT Second Left Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={door.out && pineapple && klobber}
      />
      <AztecCheck
        id={2352}
        name="Chunky 5DT Second Right Enemy"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={door.out && pineapple && klobber}
      />
      <AztecCheck
        id={2353}
        name="Enemy at Chunky 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && zinger.in}
        canGetBreak={door.out && pineapple && zinger.out}
      />
    </DropPool>
  )
}

export default Chunky5Enemies
