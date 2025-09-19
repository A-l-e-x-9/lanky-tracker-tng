import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestBean, useForestBeanHalf, usePlayForest } from '@renderer/hooks/forest'
import ForestCheck from '../check'
import { /*useHunky, */useCamera } from '@renderer/hooks/kongs'

const CenterEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const zinger = useDefeatZinger()
  const klump = useDefeatKlump()
  const beanstalk = useForestBean()
  const beanHalf = useForestBeanHalf()
/*  const hasHunky = useHunky()*/
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <ForestCheck
        id={5323}
        name="Forest Enemy: Near Apple Dropoff"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5324}
        name="Forest Enemy: Near Vanilla DK Portal"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5325}
        name="Forest Enemy: Near Well Tag"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5312}
        name="Forest Enemy: Green Tunnel"
        region="Forest Center And Beanstalk"
        canGetLogic={beanHalf && zinger.in}
        canGetBreak={beanHalf && zinger.out}
      />
      <ForestCheck
        id={5310}
        name="Forest Enemy: Near Beanstalk 0"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
      <ForestCheck
        id={5311}
        name="Forest Enemy: Near Beanstalk 1"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
      <ForestCheck
        id={5423}
        name="Forest Enemy Photo: Near Apple Dropoff"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5424}
        name="Forest Enemy Photo: Near Vanilla DK Portal"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5425}
        name="Forest Enemy Photo: Near Well Tag"
        region="Forest Center And Beanstalk"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5509}
        name="Forest Enemy Photo: Green Tunnel"
        region="Forest Center And Beanstalk"
        canGetLogic={beanHalf && hasFairyCam}
      />
      <ForestCheck
        id={5410}
        name="Forest Enemy Photo: Near Beanstalk 0"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump && hasFairyCam}
      />
      <ForestCheck
        id={5510}
        name="Forest Enemy Photo: Near Beanstalk 1"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump && hasFairyCam}
      />
    </DropPool>
  )
}

export default CenterEnemies

/*As of September 18, 2025, it seems that the Randomizer has decided to give up on making the tomatoes eligible for Dropsanity. Preserving here in case they change their minds:
      <ForestCheck
        id={5411}
        name="Forest Enemy: Giant Tomato 0"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5412}
        name="Forest Enemy: Giant Tomato 1"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5413}
        name="Forest Enemy: Giant Tomato 2"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5414}
        name="Forest Enemy: Giant Tomato 3"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5511}
        name="Forest Enemy Photo: Giant Tomato 0"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky && hasFairyCam}
      />
      <ForestCheck
        id={5512}
        name="Forest Enemy Photo: Giant Tomato 1"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky && hasFairyCam}
      />
      <ForestCheck
        id={5513}
        name="Forest Enemy Photo: Giant Tomato 2"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky && hasFairyCam}
      />
      <ForestCheck
        id={5514}
        name="Forest Enemy Photo: Giant Tomato 3"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky && hasFairyCam}
      />
*/
