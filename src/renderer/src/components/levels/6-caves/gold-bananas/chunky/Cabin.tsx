import { useChunkyCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const ChunkyCabin: React.FC = () => (
  <CavesCheck
    id={6043}
    name="Chunky's 5 Door Cabin"
    region="Caves Cabins"
    canGetLogic={useChunkyCabinGb()}
  />
)

export default ChunkyCabin
