import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestBean, useForestBeanHalf, usePlayForest } from '@renderer/hooks/forest'
import ForestCheck from '../check'
import { useHunky, useCamera } from '@renderer/hooks/kongs'

const CenterEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const zinger = useDefeatZinger()
  const klump = useDefeatKlump()
  const beanstalk = useForestBean()
  const beanHalf = useForestBeanHalf()
  const hasHunky = useHunky()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <ForestCheck
        id={5323}
        name="Enemy in Front of Tunnel to Mills"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5324}
        name="Enemy in Front of Tunnel to Giant Shroom"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5325}
        name="Enemy Near Well Entrance"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5312}
        name="Enemy in Tunnel to Bean Zone"
        region="Forest Center And Beanstalk"
        canGetLogic={beanHalf && zinger.in}
        canGetBreak={beanHalf && zinger.out}
      />
      <ForestCheck
        id={5310}
        name="Enemy 0 at Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
      <ForestCheck
        id={5311}
        name="Enemy 1 at Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
      <ForestCheck
        id={5326}
        name="Giant Tomato 0"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5327}
        name="Giant Tomato 1"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5328}
        name="Giant Tomato 2"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5329}
        name="Giant Tomato 3"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5423}
        name="Photo of Enemy in Front of Tunnel to Mills"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5424}
        name="Photo of Enemy in Front of Tunnel to Giant Shroom"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5425}
        name="Photo of Enemy Near Well Entrance"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5412}
        name="Photo of Enemy in Tunnel to Bean Zone"
        region="Forest Center And Beanstalk"
        canGetLogic={beanHalf && hasFairyCam}
      />
      <ForestCheck
        id={5410}
        name="Photo of Enemy 0 at Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump && hasFairyCam}
      />
      <ForestCheck
        id={5411}
        name="Photo of Enemy ! at Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump && hasFairyCam}
      />
      <ForestCheck
        id={5426}
        name="Photo of Giant Tomato 0"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky && hasFairyCam}
      />
      <ForestCheck
        id={5427}
        name="Photo of Giant Tomato 1"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky && hasFairyCam}
      />
      <ForestCheck
        id={5428}
        name="Photo of Giant Tomato 2"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky && hasFairyCam}
      />
      <ForestCheck
        id={5429}
        name="Photo of Giant Tomato 3"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky && hasFairyCam}
      />
    </DropPool>
  )
}

export default CenterEnemies
