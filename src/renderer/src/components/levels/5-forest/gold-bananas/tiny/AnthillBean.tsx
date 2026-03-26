import MiscPool, { BeanPool } from '@renderer/components/pools/Misc'
import { useBean } from '@renderer/hooks/settings'
import { useTinyAntGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const AnthillBean: React.FC = () => {
const canDo = useTinyAntGb()
const beanWinCon = useBean()
if (beanWinCon) {
return (
  <BeanPool>
    <ForestCheck
      id={5034}
      name="THE BEAN (Tree Stump Gauntlet's Second Reward)"
      region="Forest Area 4"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
  </BeanPool>
)
} else {
return (
  <MiscPool>
    <ForestCheck
      id={5034}
      name="THE BEAN (Tree Stump Gauntlet's Second Reward)"
      region="Forest Area 4"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
  </MiscPool>
)
}
}

export default AnthillBean
