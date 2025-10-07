import { useDefeatRoboKremling } from '@renderer/hooks/enemies'
import { usePlayFactory, useFactoryTesting } from '@renderer/hooks/factory'
import { useCamera } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const StartEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const robo = useDefeatRoboKremling()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <FactoryCheck
        id={3302}
        name="Enemy at Lobby Left"
        region="Factory Start Area"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3303}
        name="Enemy at Lobby Right"
        region="Factory Start Area"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3308}
        name="Enemy in the Tunnel to Hatch"
        region="Factory Start Area"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3402}
        name="Photo of Enemy at Lobby Left"
        region="Factory Start Area"
        canGetLogic={inStage && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3403}
        name="Photo of Enemy at Lobby Right"
        region="Factory Start Area"
        canGetLogic={inStage && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3408}
        name="Photo of Enemy in the Tunnel to Hatch"
        region="Factory Start Area"
        canGetLogic={testing && robo && hasFairyCam}
      />
    </DropPool>
  )
}

export default StartEnemies
