import { useDkMillGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const DkMill: React.FC = () => {
  const millGb = useDkMillGb()
  return (
    <ForestCheck
      id={5003}
      name="DK's Mill Levers"
      region="Forest Area 1"
      canGetLogic={millGb.in}
      canGetBreak={millGb.out}
    />
  )
}

export default DkMill
