import { useDiddyCageGb } from '@renderer/src/hooks/forest'
import ForestCheck from '../../check'

const MillWinch: React.FC = () => {
  const canCheck = useDiddyCageGb()
  return (
  <ForestCheck
    id={5012}
    name="Forest Diddy Winch Cage"
    region="Forest Mills"
    canGetLogic={canCheck.in}
    canGetBreak={canCheck.out}
  />
  )
}

export default MillWinch
