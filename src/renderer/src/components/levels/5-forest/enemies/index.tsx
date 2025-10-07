import CenterEnemies from './Center'
import MillsEnemies from './Mills'
import BeanstalkEnemies from './Beanstalk'
import MushExteriorEnemies from './MushExterior'
import MushInteriorEnemies from './MushInterior'
import OwlEnemies from './Owl'

const EnemyLocations: React.FC = () => {
  return (
    <>
      <CenterEnemies />
      <MillsEnemies />
      <BeanstalkEnemies />
      <MushExteriorEnemies />
      <MushInteriorEnemies />
      <OwlEnemies />
    </>
  )
}

export default EnemyLocations
