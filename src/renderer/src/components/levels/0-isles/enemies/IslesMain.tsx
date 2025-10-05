import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const IslesMainEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
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
      <IslesCheck
        id={400}
        name="Photo of Enemy Near Pineapple Cage 0"
        region="DK Island"
        canGetLogic={anyKong && hasFairyCam}
      />
      <IslesCheck
        id={401}
        name="Photo of Enemy Near Pineapple Cage 1"
        region="DK Island"
        canGetLogic={anyKong && hasFairyCam}
      />
      <IslesCheck
        id={402}
        name="Photo of Enemy Near Fungi Cannon 0"
        region="DK Island"
        canGetLogic={anyKong && hasFairyCam}
      />
      <IslesCheck
        id={403}
        name="Photo of Enemy Near Fungi Cannon 1"
        region="DK Island"
        canGetLogic={anyKong && hasFairyCam}
      />
      <IslesCheck
        id={404}
        name="Photo of Enemy Near Japes Entrance"
        region="DK Island"
        canGetLogic={anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default IslesMainEnemies
