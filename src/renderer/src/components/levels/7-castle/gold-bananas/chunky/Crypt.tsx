import { useChunkyCryptGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyCrypt: React.FC = () => {
const canDoCheck = useChunkyCryptGb()
return (
  <CastleCheck
    id={7043}
    name="Castle Chunky Crypt"
    region="Castle Underground"
    canGetLogic={canDoCheck.in}
    canGetBreak={canDoCheck.out}
  />
)
}

export default ChunkyCrypt
