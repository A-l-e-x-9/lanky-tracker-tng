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
        name="Factory Enemy: Lobby Left"
        region="Factory Start"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3303}
        name="Factory Enemy: Lobby Right"
        region="Factory Start"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3308}
        name="Factory Enemy: Tunnel to Hatch"
        region="Factory Start"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3402}
        name="Factory Enemy Photo: Lobby Left"
        region="Factory Start"
        canGetLogic={inStage && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3403}
        name="Factory Enemy Photo: Lobby Right"
        region="Factory Start"
        canGetLogic={inStage && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3408}
        name="Factory Enemy Photo: Tunnel to Hatch"
        region="Factory Start"
        canGetLogic={testing && robo && hasFairyCam}
      />
    </DropPool>
  )
}

export default StartEnemies
