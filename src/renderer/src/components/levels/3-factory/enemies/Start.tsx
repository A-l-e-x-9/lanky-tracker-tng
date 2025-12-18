import { useDefeatRoboKremling } from '@renderer/hooks/enemies'
import { usePlayFactory } from '@renderer/hooks/factory'
import FactoryCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const StartEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const robo = useDefeatRoboKremling()
  return (
    <DropPool>
      <FactoryCheck
        id={3302}
        name="Enemy at Lobby Left"
        region="Factory Start Area"
        canGetLogic={inStage.in && robo}
        canGetBreak={inStage.out && robo}
      />
      <FactoryCheck
        id={3303}
        name="Enemy at Lobby Right"
        region="Factory Start Area"
        canGetLogic={inStage.in && robo}
        canGetBreak={inStage.out && robo}
      />
      <FactoryCheck
        id={3308}
        name="Enemy in the Tunnel to Hatch"
        region="Factory Start Area"
        canGetLogic={inStage.in && robo}
        canGetBreak={inStage.out && robo}
      />
    </DropPool>
  )
}

export default StartEnemies
