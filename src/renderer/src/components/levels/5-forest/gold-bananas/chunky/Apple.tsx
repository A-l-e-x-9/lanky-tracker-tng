import GBPool from '@renderer/components/pools/GB'
import { useChunkyAppleGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyApple: React.FC = () => (
<GBPool>
  <ForestCheck
    id={5043}
    name="Chunky's Apple Rescue"
    region="Forest Area 2"
    canGetLogic={useChunkyAppleGb()}
  />
</GBPool>
)

export default ChunkyApple
