import { useLankyFreeChunkyGb } from '@renderer/hooks/factory'
import KongCheck from '@renderer/components/pools/Kong'
import FactoryCheck from '../../check'

const ChunkyCage: React.FC = () => (
  <FactoryCheck
    id={3025}
    name="Chunky's Cage"
    region="Storage and Arcade Area"
    canGetLogic={useLankyFreeChunkyGb()}
  />
)

export default ChunkyCage
