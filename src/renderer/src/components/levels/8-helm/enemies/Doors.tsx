import { useHelmDoors } from '@renderer/hooks/helm'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const HelmDoorsEnemies: React.FC = () => {
  const helmDoors = useHelmDoors()
  const anyKong = useAnyKong()
  const hasFairyCam = useCamera()
  return (
    <>
      <HelmCheck
        id={8317}
        name="Helm Enemy: Nav Room Left"
        canGetLogic={helmDoors.in && anyKong}
        canGetBreak={helmDoors.out && anyKong}
      />
      <HelmCheck
        id={8318}
        name="Helm Enemy: Nav Room Right"
        canGetLogic={helmDoors.in && anyKong}
        canGetBreak={helmDoors.out && anyKong}
      />
      <HelmCheck
        id={8417}
        name="Helm Enemy Photo: Nav Room Left"
        canGetLogic={helmDoors.in && anyKong && hasFairyCam}
        canGetBreak={helmDoors.out && anyKong && hasFairyCam}
      />
      <HelmCheck
        id={8418}
        name="Helm Enemy Photo: Nav Room Right"
        canGetLogic={helmDoors.in && anyKong && hasFairyCam}
        canGetBreak={helmDoors.out && anyKong && hasFairyCam}
      />
    </>
  )
}

export default HelmDoorsEnemies
