import Miniboss from '@renderer/components/pools/Miniboss'
import MiscPool from '@renderer/components/pools/Misc'
import { useTinyAntGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const AnthillBean: React.FC = () => {
const canDo = useTinyAntGb()
return (
<Miniboss>
  <MiscPool>
    <ForestCheck
      id={5034}
      name="THE BEAN (Tree Stump Gauntlet's Second Reward)"
      region="Forest Area 4"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
  </MiscPool>
</Miniboss>
)
}

export default AnthillBean
