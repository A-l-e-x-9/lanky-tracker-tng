import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinySpiderGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const SpiderBoss: React.FC = () => {
  const spiderGb = useTinySpiderGb()
  return (
  <Miniboss>
    <ForestCheck
      id={5032}
      name="Spider Boss"
      region="Forest Area 1"
      canGetLogic={spiderGb.in}
      canGetBreak={spiderGb.out}
    />
  </Miniboss>
  )
}

export default SpiderBoss
