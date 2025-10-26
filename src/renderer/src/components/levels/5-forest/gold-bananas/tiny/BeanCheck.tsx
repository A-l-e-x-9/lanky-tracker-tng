import { useTinyBeanGb } from '@renderer/hooks/forest'
import GBPool from '@renderer/components/pools/GB'
import ForestCheck from '../../check'

const BeanCheck: React.FC = () => (
<GBPool>
  <ForestCheck
    id={5033}
    name="Planting The Bean"
    region="Forest Area 2"
    canGetLogic={useTinyBeanGb()}
  />
  </GBPool>
)

export default BeanCheck
