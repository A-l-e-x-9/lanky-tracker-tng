import GBPool from '@renderer/components/pools/GB'
import { useChunkyCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const ChunkyCabin: React.FC = () => (
<GBPool>
  <CavesCheck
    id={6043}
    name="Chunky's 5 Door Cabin"
    region="Caves Cabins"
    canGetLogic={useChunkyCabinGb()}
  />
  </GBPool>
)

export default ChunkyCabin
