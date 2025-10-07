import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const IslesMainEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <IslesCheck
        id={300}
        name="Enemy Near Pineapple Cage 0"
        region="DK Island"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={301}
        name="Enemy Near Pineapple Cage 1"
        region="DK Island"
        canGetLogic={anyKong && zinger.in}
        canGetBreak={anyKong && zinger.out}
      />
      <IslesCheck
        id={302}
        name="Enemy Near Fungi Cannon 0"
        region="DK Island"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={303}
        name="Enemy Near Fungi Cannon 1"
        region="DK Island"
        canGetLogic={anyKong && zinger.in}
        canGetBreak={anyKong && zinger.out}
      />
      <IslesCheck
        id={304}
        name="Enemy Near Japes Entrance"
        region="DK Island"
        canGetLogic={anyKong}
      />
    </DropPool>
  )
}

export default IslesMainEnemies
