import GBPool from '@renderer/components/pools/GB'
import { useDiddyCageGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MillWinch: React.FC = () => {
  const canCheck = useDiddyCageGb()
  return (
  <GBPool>
  <ForestCheck
    id={5012}
    name="Diddy's Winch"
    region="Forest Area 1"
    canGetLogic={canCheck.in}
    canGetBreak={canCheck.out}
  />
  </GBPool>
  )
}

export default MillWinch
