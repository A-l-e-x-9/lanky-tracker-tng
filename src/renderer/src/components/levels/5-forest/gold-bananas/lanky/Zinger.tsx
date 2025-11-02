import GBPool from '@renderer/components/pools/GB'
import { useLankyMushGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ZingerBounce: React.FC = () => {
  const mushGb = useLankyMushGb()
  return (
  <GBPool>
    <ForestCheck
      id={5023}
      name="Lanky's Zinger Bounce"
      region="Inside the Giant Mushroom"
      canGetLogic={mushGb.in}
      canGetBreak={mushGb.out}
    />
    </GBPool>
  )
}

export default ZingerBounce
