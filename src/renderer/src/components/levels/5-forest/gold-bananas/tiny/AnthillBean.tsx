import MiscPool, { BeanPool } from '@renderer/components/pools/Misc'
import { useTinyAntGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const AnthillBean: React.FC = () => {
const canDo = useTinyAntGb()
return (
  <MiscPool>
  <BeanPool>
    <ForestCheck
      id={5034}
      name="THE BEAN (Tree Stump Gauntlet's Second Reward)"
      region="Forest Area 4"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
  </BeanPool>
  </MiscPool>
)
}

export default AnthillBean
