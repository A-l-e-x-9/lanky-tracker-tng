import { BeanPool } from '@renderer/components/pools/Misc'
import { useTinyAntGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const AnthillBean: React.FC = () => {
const canDo = useTinyAntGb()
return (
  <BeanPool>
    <ForestCheck
      id={5034}
      name="Tree Stump Gauntlet's Second Reward (home of The Bean™ in vanilla)"
      region="Forest Area 4"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
  </BeanPool>
)
}

export default AnthillBean
