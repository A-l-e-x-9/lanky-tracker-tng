import DropPool from '@renderer/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const TestingEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const anyKong = useAnyKong()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <FactoryCheck
        id={3305}
        name="Block Tower Enemy 0"
        region="Testing Room"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3306}
        name="Block Tower Enemy 1"
        region="Testing Room"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3307}
        name="Block Tower Enemy 2"
        region="Testing Room"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3311}
        name="Enemy at T-intersection between Snide's and block tower"
        region="Testing Room"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3316}
        name="Enemy at pole to block tower"
        region="Testing Room"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
    </DropPool>
  )
}

export default TestingEnemies
