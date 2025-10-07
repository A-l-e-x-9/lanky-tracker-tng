import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestBean, useForestBeanHalf, usePlayForest } from '@renderer/hooks/forest'
import ForestCheck from '../check'
import { useHunky } from '@renderer/hooks/kongs'

const BeanstalkEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const zinger = useDefeatZinger()
  const klump = useDefeatKlump()
  const beanstalk = useForestBean()
  const beanHalf = useForestBeanHalf()
  const hasHunky = useHunky()
  return (
    <DropPool>
      <ForestCheck
        id={5317}
        name="Enemy 0 at Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
      <ForestCheck
        id={5318}
        name="Enemy 1 at Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && klump}
      />
      <ForestCheck
        id={5319}
        name="Giant Tomato 0"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5320}
        name="Giant Tomato 1"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5321}
        name="Giant Tomato 2"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
      <ForestCheck
        id={5322}
        name="Giant Tomato 3"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && hasHunky}
      />
    </DropPool>
  )
}

export default BeanstalkEnemies
