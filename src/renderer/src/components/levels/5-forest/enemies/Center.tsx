import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestBean, useForestBeanHalf, usePlayForest } from '@renderer/hooks/forest'
import ForestCheck from '../check'
import { useHunky } from '@renderer/hooks/kongs'

const CenterEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const zinger = useDefeatZinger()
  const klump = useDefeatKlump()
  const beanstalk = useForestBean()
  const beanHalf = useForestBeanHalf()
  const hasHunky = useHunky()
  return (
    <DropPool>
      <ForestCheck
        id={5300}
        name="Enemy in Front of Tunnel to Mills"
        region="Forest Central Area"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5301}
        name="Enemy in Front of Tunnel to Giant Shroom"
        region="Forest Central Area"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5302}
        name="Enemy Near Well Entrance"
        region="Forest Central Area"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5303}
        name="Enemy in Tunnel to Bean Zone"
        region="Forest Central Area"
        canGetLogic={beanHalf && zinger.in}
        canGetBreak={beanHalf && zinger.out}
      />
    </DropPool>
  )
}

export default CenterEnemies
