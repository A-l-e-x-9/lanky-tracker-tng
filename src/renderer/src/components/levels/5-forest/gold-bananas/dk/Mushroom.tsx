import GBPool from '@renderer/components/pools/GB'
import { useDkMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MushroomCannon: React.FC = () => (
<GBPool>
  <ForestCheck
    id={5002}
    name="The Check of Legends (DK's Mushroom Cannons)"
    region="Inside the Giant Mushroom"
    canGetLogic={useDkMushGb()}
  />
  </GBPool>
)

export default MushroomCannon
