import { useChunkyChestGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const GalleonChest: React.FC = () => (
  <GalleonCheck
    id={4040}
    name="Chunky's Right Chest"
    region="Galleon Caves"
    canGetLogic={useChunkyChestGb()}
  />
)

export default GalleonChest
