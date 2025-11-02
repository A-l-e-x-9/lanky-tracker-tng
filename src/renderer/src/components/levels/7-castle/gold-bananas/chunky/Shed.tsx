import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyShedGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyShed: React.FC = () => {
  const shedGb = useChunkyShedGb()
  return (
  <GBPool>
  <Miniboss>
    <CastleCheck
      id={7041}
      name="Chunky's Shed"
      region="Creepy Castle Main"
      canGetLogic={shedGb.in}
      canGetBreak={shedGb.out}
    />
  </Miniboss>
  </GBPool>
  )
}

export default ChunkyShed
