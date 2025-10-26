import GBPool from '@renderer/components/pools/GB'
import { useChunkyCryptGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyCrypt: React.FC = () => {
const canDoCheck = useChunkyCryptGb()
return (
<GBPool>
  <CastleCheck
    id={7043}
    name="Chunky's Crypt Bonus Barrel"
    region="Castle Crypt and Dungeon"
    canGetLogic={canDoCheck.in}
    canGetBreak={canDoCheck.out}
  />
  </GBPool>
)
}

export default ChunkyCrypt
