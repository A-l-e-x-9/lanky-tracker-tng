import { useTinyBeanGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const BeanCheck: React.FC = () => (
  <ForestCheck
    id={5033}
    name="Planting The Bean"
    region="Forest Area 2"
    canGetLogic={useTinyBeanGb()}
  />
)

export default BeanCheck
