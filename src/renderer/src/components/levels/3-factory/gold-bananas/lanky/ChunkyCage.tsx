import { useLankyFreeChunkyGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ChunkyCage: React.FC = () => (
  <FactoryCheck
    id={3025}
    name="Chunky's Cage"
    region="Storage And Arcade"
    canGetLogic={useLankyFreeChunkyGb()}
  />
)

export default ChunkyCage
