import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestBeanHalf, usePlayForest } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const CenterEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const zinger = useDefeatZinger()
  const beanHalf = useForestBeanHalf()
  return (
    <DropPool>
      <ForestCheck
        id={5300}
        name="Enemy in Front of Tunnel to Mills"
        region="Forest Central Area"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5301}
        name="Enemy in Front of Tunnel to Giant Shroom"
        region="Forest Central Area"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5302}
        name="Enemy Near Well Entrance"
        region="Forest Central Area"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5303}
        name="Enemy in Tunnel to Bean Zone"
        region="Forest Central Area"
        canGetLogic={beanHalf.in && zinger.in}
        canGetBreak={beanHalf.out && zinger.out}
      />
    </DropPool>
  )
}

export default CenterEnemies
