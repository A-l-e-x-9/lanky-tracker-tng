import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinyBeanGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const BeanCheck: React.FC = () => (
<Miniboss>
  <ForestCheck
    id={5033}
    name="Planting The Bean"
    region="Forest Center And Beanstalk"
    canGetLogic={useTinyBeanGb()}
  />
</Miniboss>
)

export default BeanCheck
