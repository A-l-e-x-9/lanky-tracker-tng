import { useDiddyCageGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MillWinch: React.FC = () => {
  const canCheck = useDiddyCageGb()
  return (
  <ForestCheck
    id={5012}
    name="Diddy's Winch"
    region="Forest Area 1"
    canGetLogic={canCheck.in}
    canGetBreak={canCheck.out}
  />
  )
}

export default MillWinch
