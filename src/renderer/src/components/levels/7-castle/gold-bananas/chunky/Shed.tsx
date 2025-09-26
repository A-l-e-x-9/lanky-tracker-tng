import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyShedGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyShed: React.FC = () => {
  const shedGb = useChunkyShedGb()
  return (
  <Miniboss>
    <CastleCheck
      id={7041}
      name="Castle Chunky Shed"
      region="Castle Surroundings"
      canGetLogic={shedGb.in}
      canGetBreak={shedGb.out}
    />
  </Miniboss>
  )
}

export default ChunkyShed
