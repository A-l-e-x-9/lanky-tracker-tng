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
        name="Isles Enemy: Pineapple Cage 0"
        region="Main Isle"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={301}
        name="Isles Enemy: Pineapple Cage 1"
        region="Main Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={302}
        name="Isles Enemy: Fungi Cannon 0"
        region="Main Isle"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={303}
        name="Isles Enemy: Fungi Cannon 1"
        region="Main Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={304}
        name="Isles Enemy: Japes Entrance"
        region="Main Isle"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={400}
        name="Isles Enemy Photo: Pineapple Cage 0"
        region="Main Isle"
        canGetLogic={anyKong && hasFairyCam}
      />
      <IslesCheck
        id={401}
        name="Isles Enemy Photo: Pineapple Cage 1"
        region="Main Isle"
        canGetLogic={anyKong && zinger && hasFairyCam}
      />
      <IslesCheck
        id={402}
        name="Isles Enemy Photo: Fungi Cannon 0"
        region="Main Isle"
        canGetLogic={anyKong && hasFairyCam}
      />
      <IslesCheck
        id={403}
        name="Isles Enemy Photo: Fungi Cannon 1"
        region="Main Isle"
        canGetLogic={anyKong && zinger && hasFairyCam}
      />
      <IslesCheck
        id={404}
        name="Isles Enemy Photo: Japes Entrance"
        region="Main Isle"
        canGetLogic={anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default IslesMainEnemies
