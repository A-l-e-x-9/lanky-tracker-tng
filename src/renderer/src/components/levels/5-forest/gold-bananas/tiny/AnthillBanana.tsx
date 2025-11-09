import Miniboss from '@renderer/components/pools/Miniboss'
import GBPool from '@renderer/components/pools/GB'
import { useTinyAntGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const AnthillBanana: React.FC = () => {
const canDo = useTinyAntGb()
return (
<GBPool>
<Miniboss>
  <ForestCheck
    id={5031}
    name="Tree Stump Gauntlet"
    region="Forest Area 4"
    canGetLogic={canDo.in}
    canGEtBreak={canDo.out}
  />
</Miniboss>
</GBPool>
)
}

export default AnthillBanana
