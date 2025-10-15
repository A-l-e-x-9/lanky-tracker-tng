import { useChunkySeasickGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const SeasickShip: React.FC = () => (
  <GalleonCheck
    id={4042}
    name="Chunky's Seasick Ship"
    region="Lighthouse Area"
    canGetLogic={useChunkySeasickGb()}
  />
)

export default SeasickShip
