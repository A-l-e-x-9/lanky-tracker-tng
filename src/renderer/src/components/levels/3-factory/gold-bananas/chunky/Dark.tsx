import GBPool from '@renderer/components/pools/GB'
import { useChunkyDarkGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const DarkRoom: React.FC = () => {
const canDo = useChunkyDarkGb()
return (
<GBPool>
  <FactoryCheck
    id={3041}
    name="Chunky's Dark Room"
    region="Storage and Arcade Area"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default DarkRoom
