import GBPool from '@renderer/components/pools/GB'
import { useDkMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MushroomCannon: React.FC = () => {
const canDo = useDkMushGb()
return (
<GBPool>
  <ForestCheck
    id={5002}
    name="The Check of Legends (DK's Mushroom Cannons)"
    region="Inside the Giant Mushroom"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default MushroomCannon
