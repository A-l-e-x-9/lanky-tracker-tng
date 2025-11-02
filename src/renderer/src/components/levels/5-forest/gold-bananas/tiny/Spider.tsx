import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinySpiderGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const SpiderBoss: React.FC = () => {
  const spiderGb = useTinySpiderGb()
  return (
  <GBPool>
  <Miniboss>
    <ForestCheck
      id={5032}
      name="Spider Boss"
      region="Forest Area 1"
      canGetLogic={spiderGb.in}
      canGetBreak={spiderGb.out}
    />
  </Miniboss>
  </GBPool>
  )
}

export default SpiderBoss
