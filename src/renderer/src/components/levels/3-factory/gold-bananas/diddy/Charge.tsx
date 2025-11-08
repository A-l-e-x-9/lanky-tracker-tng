import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useDiddyEnemyGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ChargeTest: React.FC = () => {
const canDo = useDiddyEnemyGb()
return (
<GBPool>
<Miniboss>
  <FactoryCheck
    id={3011}
    name="Diddy's Pincode Room"
    region="R&D Room"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
</Miniboss>
</GBPool>
)
}

export default ChargeTest
