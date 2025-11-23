import GBPool from '@renderer/components/pools/GB'
import { useTinyDartGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TinyDartboard: React.FC = () => {
const canDo = useTinyDartGb()
return (
<GBPool>
  <FactoryCheck
    id={3030}
    name="Tiny's Dartboard"
    region="Testing Room"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default TinyDartboard
