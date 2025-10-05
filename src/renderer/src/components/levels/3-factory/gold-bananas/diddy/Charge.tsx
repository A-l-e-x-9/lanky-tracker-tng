import Miniboss from '@renderer/components/pools/Miniboss'
import { useDiddyEnemyGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ChargeTest: React.FC = () => (
<Miniboss>
  <FactoryCheck
    id={3011}
    name="Diddy's Pincode Room"
    region="R&D Area"
    canGetLogic={useDiddyEnemyGb()}
  />
</Miniboss>
)

export default ChargeTest
