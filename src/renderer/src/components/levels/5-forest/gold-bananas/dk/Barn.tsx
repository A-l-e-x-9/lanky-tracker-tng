import { useDkBarnGb } from '@renderer/hooks/forest'
import GBPool from '@renderer/components/pools/GB'
import ForestCheck from '../../check'

const DkBarn: React.FC = () => {
  const barnGb = useDkBarnGb()
  return (
  <GBPool>
    <ForestCheck
      id={5004}
      name="Thornvine Barn Barrel"
      region="Forest Area 1"
      canGetLogic={barnGb.in}
      canGetBreak={barnGb.out}
    />
    </GBPool>
  )
}

export default DkBarn
