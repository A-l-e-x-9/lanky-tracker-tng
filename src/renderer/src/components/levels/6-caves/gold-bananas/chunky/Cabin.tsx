import GBPool from '@renderer/components/pools/GB'
import { useChunkyCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const ChunkyCabin: React.FC = () => {
const canDo = useChunkyCabinGb()
return (
<GBPool>
  <CavesCheck
    id={6043}
    name="Chunky's 5 Door Cabin"
    region="Caves Cabins"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default ChunkyCabin
