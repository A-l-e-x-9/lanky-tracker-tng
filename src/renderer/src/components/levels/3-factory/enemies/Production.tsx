import DropPool from '@renderer/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
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
        name="Enemy 0 Down the Hatch"
        region="Prod Room"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3310}
        name="Enemy 1 Down the Hatch"
        region="Prod Room"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3314}
        name="Enemy at Low Warp 4"
        region="Prod Room"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3315}
        name="Enemy at Diddy's Prod Room Switch"
        region="Prod Room"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <FactoryCheck
        id={3409}
        name="Photo of Enemy 0 Down the Hatch"
        region="Prod Room"
        canGetLogic={testing && anyKong && hasFairyCam}
      />
      <FactoryCheck
        id={3410}
        name="Photo of Enemy 1 Down the Hatch"
        region="Prod Room"
        canGetLogic={testing && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3414}
        name="Photo of Enemy at Low Warp 4"
        region="Prod Room"
        canGetLogic={inStage && robo && hasFairyCam}
      />
      <FactoryCheck
        id={3415}
        name="Photo of Enemy at Diddy's Prod Room Switch"
        region="Prod Room"
        canGetLogic={inStage && hasFairyCam}
      />
    </DropPool>
  )
}

export default ProductionEnemies
