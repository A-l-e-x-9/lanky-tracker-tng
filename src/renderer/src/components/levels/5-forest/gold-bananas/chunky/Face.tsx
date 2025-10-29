import GBPool from '@renderer/components/pools/GB'
import { useChunkyFaceGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyFace: React.FC = () => (
<GBPool>
  <ForestCheck
    id={5041}
    name="Chunky's Face Puzzle"
    region="Inside the Giant Mushroom"
    canGetLogic={useChunkyFaceGb()}
  />
  </GBPool>
)

export default ChunkyFace
