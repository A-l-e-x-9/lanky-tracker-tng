import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinyAntGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const AnthillBanana: React.FC = () => (
<Miniboss>
  <ForestCheck
    id={5031}
    name="Tree Stump Gauntlet"
    region="Forest Area 4"
    canGetLogic={useTinyAntGb()}
  />
</Miniboss>
)

export default AnthillBanana
