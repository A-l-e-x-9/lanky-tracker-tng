import GBPool from '@renderer/components/pools/GB'
import { useTinyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const TinyIgloo: React.FC = () => {
const canDo = useTinyIglooGb()
return (
<GBPool>
  <CavesCheck
    id={6032}
    name="Tiny's 5 Door Igloo"
    region="Caves Igloo"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default TinyIgloo
