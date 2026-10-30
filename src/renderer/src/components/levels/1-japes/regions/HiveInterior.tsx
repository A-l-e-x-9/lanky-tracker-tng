import HiveInteriorEnemies from '../enemies/HiveInterior'
import HiveInside from '../gold-bananas/tiny/HiveInside'
import TinyHiveBalloon from '../balloons/Hive'

const HiveInteriorChecks: React.FC = () => {
return (
  <>
    <HiveInside />
    <TinyHiveBalloon />
    <HiveInteriorEnemies />
  </>
)
}

export default HiveInteriorChecks
