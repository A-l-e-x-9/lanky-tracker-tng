import DropPool from '@renderer/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const ProductionEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const anyKong = useAnyKong()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
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
    </DropPool>
  )
}

export default ProductionEnemies
