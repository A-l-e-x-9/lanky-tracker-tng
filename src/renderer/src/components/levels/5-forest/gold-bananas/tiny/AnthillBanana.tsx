import Miniboss from '@renderer/components/pools/Miniboss'
import GBPool from '@renderer/components/pools/GB'
import { useTinyAntGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const AnthillBanana: React.FC = () => (
<GBPool>
<Miniboss>
  <ForestCheck
    id={5031}
    name="Tree Stump Gauntlet"
    region="Forest Area 4"
    canGetLogic={useTinyAntGb()}
  />
</Miniboss>
</GBPool>
)

export default AnthillBanana
