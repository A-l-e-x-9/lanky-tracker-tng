import DropPool from '@renderer/src/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/src/hooks/enemies'
import { useFactoryTesting, usePlayFactory } from '@renderer/src/hooks/factory'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import FactoryCheck from '../check'

const ProductionEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const anyKong = useAnyKong()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <FactoryCheck
        id={3309}
        name="Factory Enemy: Tunnel to Prod 0"
        region="Production Room"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3310}
        name="Factory Enemy: Tunnel to Prod 1"
        region="Production Room"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3314}
        name="Factory Enemy: Low Warp 4"
        region="Production Room"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3315}
        name="Factory Enemy: Diddy Switch"
        region="Production Room"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <FactoryCheck
        id={3409}
        name="Factory Enemy Photo: Tunnel to Prod 0"
        region="Production Room"
        canGetLogic={testing && anyKong && hasFairyCam}
      />
      <FactoryCheck
        id={3410}
        name="Factory Enemy Photo: Tunnel to Prod 1"
        region="Production Room"
        canGetLogic={testing && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3414}
        name="Factory Enemy Photo: Low Warp 4"
        region="Production Room"
        canGetLogic={inStage && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3415}
        name="Factory Enemy Photo: Diddy Switch"
        region="Production Room"
        canGetLogic={inStage && hasFairyCam}
      />
    </DropPool>
  )
}

export default ProductionEnemies
