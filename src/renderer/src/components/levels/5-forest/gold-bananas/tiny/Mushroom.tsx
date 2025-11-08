import GBPool from '@renderer/components/pools/GB'
import { useTinyMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MushroomBarrel: React.FC = () => {
const canDo = useTinyMushGb()
return (
<GBPool>
  <ForestCheck
    id={5030}
    name="Tiny's Mushroom Barrel"
    region="Inside the Giant Mushroom"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default MushroomBarrel
