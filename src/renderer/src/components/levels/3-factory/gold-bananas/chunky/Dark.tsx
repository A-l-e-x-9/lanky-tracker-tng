import GBPool from '@renderer/components/pools/GB'
import { useChunkyDarkGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const DarkRoom: React.FC = () => (
<GBPool>
  <FactoryCheck
    id={3041}
    name="Chunky's Dark Room"
    region="Storage and Arcade Area"
    canGetLogic={useChunkyDarkGb()}
  />
  </GBPool>
)

export default DarkRoom
