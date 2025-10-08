import BeanstalkDirt from '../dirt/Beanstalk'
import ChunkyApple from '../gold-bananas/chunky/Apple'
import BeanCheck from '../gold-bananas/tiny/BeanCheck'

const BeanstalkChecks: React.FC = () => (
  <>
    <BeanCheck />
    <ChunkyApple />
    <BeanstalkDirt />
    <BeanstalkEnemies />
  </>
)

export default BeanstalkChecks
