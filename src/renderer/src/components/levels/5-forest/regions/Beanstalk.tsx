import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BeanstalkDirt from '../dirt/Beanstalk'
import ChunkyApple from '../gold-bananas/chunky/Apple'
import BeanCheck from '../gold-bananas/tiny/BeanCheck'
import BeanstalkEnemies from '../enemies/Beanstalk'

const BeanstalkChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <BeanCheck />
    <ChunkyApple />
    <BeanstalkDirt />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <BeanstalkEnemies />
  </div>
  </>
)
}

export default BeanstalkChecks
