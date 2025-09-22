import DropPool from '@renderer/src/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/src/hooks/enemies'
import { useFactoryTesting, usePlayFactory } from '@renderer/src/hooks/factory'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import FactoryCheck from '../check'

const TestingEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const anyKong = useAnyKong()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <FactoryCheck
        id={3305}
        name="Factory Enemy: Block Tower 0"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3306}
        name="Factory Enemy: Block Tower 1"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3307}
        name="Factory Enemy: Block Tower 2"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3311}
        name="Factory Enemy: Tunnel to Block Tower"
        region="Testing Area"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3316}
        name="Factory Enemy: To Block Tower Tunnel"
        region="Testing Area"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <FactoryCheck
        id={3405}
        name="Factory Enemy Photo: Block Tower 0"
        region="Testing Area"
        canGetLogic={testing && anyKong && hasFairyCam}
      />
      <FactoryCheck
        id={3406}
        name="Factory Enemy Photo: Block Tower 1"
        region="Testing Area"
        canGetLogic={testing && anyKong && hasFairyCam}
      />
      <FactoryCheck
        id={3407}
        name="Factory Enemy Photo: Block Tower 2"
        region="Testing Area"
        canGetLogic={testing && anyKong && hasFairyCam}
      />
      <FactoryCheck
        id={3411}
        name="Factory Enemy Photo: Tunnel to Block Tower"
        region="Testing Area"
        canGetLogic={testing && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3416}
        name="Factory Enemy Photo: To Block Tower Tunnel"
        region="Testing Area"
        canGetLogic={inStage && hasFairyCam}
      />
    </DropPool>
  )
}

export default TestingEnemies
