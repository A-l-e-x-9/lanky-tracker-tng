import GBPool from '@renderer/components/pools/GB'
import { useLankyMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MushroomSlam: React.FC = () => {
  const mushGb = useLankyMushGb()
  return (
  <GBPool>
    <ForestCheck
      id={5021}
      name="Lanky's Colored Mushroom Slam"
      region="Inside the Giant Mushroom"
      canGetLogic={mushGb.in}
      canGetBreak={mushGb.out}
    />
    </GBPool>
  )
}

export default MushroomSlam
