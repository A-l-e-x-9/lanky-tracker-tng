import { useDkBarnGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const DkBarn: React.FC = () => {
  const barnGb = useDkBarnGb()
  return (
    <ForestCheck
      id={5004}
      name="Thornvine Barn Barrel"
      region="Forest Area 1"
      canGetLogic={barnGb.in}
      canGetBreak={barnGb.out}
    />
  )
}

export default DkBarn
