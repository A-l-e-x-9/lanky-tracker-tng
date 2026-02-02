import DropPool from '@renderer/components/pools/Drops'
import { useDefeatToughEnemy } from '@renderer/hooks/enemies'
import { useForestBean, useForestDay, useForestNight } from '@renderer/hooks/forest'
import ForestCheck from '../check'
import { useHunky } from '@renderer/hooks/kongs'

const BeanstalkEnemies: React.FC = () => {
  const klump = useDefeatToughEnemy()
  const beanstalk = useForestBean()
  const hasHunky = useHunky()
  const isDay = useForestDay()
  const isNight = useForestNight()
  return (
    <DropPool>
      <ForestCheck
        id={5317}
        name="Enemy 0 at Beanstalk"
        region="Forest Area 2"
        canGetLogic={beanstalk.in && ((isDay.in && klump) || isNight.in)}
        canGetBreak={beanstalk.out && ((isDay.out && klump) || isNight.out)}
      />
      <ForestCheck
        id={5318}
        name="Enemy 1 at Beanstalk"
        region="Forest Area 2"
        canGetLogic={beanstalk.in && ((isDay.in && klump) || isNight.in)}
        canGetBreak={beanstalk.out && ((isDay.out && klump) || isNight.out)}
      />
      <ForestCheck
        id={5319}
        name="Giant Tomato 0"
        region="Forest Area 2"
        canGetLogic={beanstalk.in && hasHunky}
        canGetBreak={beanstalk.out && hasHunky}
      />
      <ForestCheck
        id={5320}
        name="Giant Tomato 1"
        region="Forest Area 2"
        canGetLogic={beanstalk.in && hasHunky}
        canGetBreak={beanstalk.out && hasHunky}
      />
      <ForestCheck
        id={5321}
        name="Giant Tomato 2"
        region="Forest Area 2"
        canGetLogic={beanstalk.in && hasHunky}
        canGetBreak={beanstalk.out && hasHunky}
      />
      <ForestCheck
        id={5322}
        name="Giant Tomato 3"
        region="Forest Area 2"
        canGetLogic={beanstalk.in && hasHunky}
        canGetBreak={beanstalk.out && hasHunky}
      />
    </DropPool>
  )
}

export default BeanstalkEnemies
