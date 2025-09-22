import { useChunkyChestGb } from '@renderer/src/hooks/galleon'
import GalleonCheck from '../../check'

const GalleonChest: React.FC = () => (
  <GalleonCheck
    id={4040}
    name="Galleon Chunky Chest"
    region="Galleon Caverns"
    canGetLogic={useChunkyChestGb()}
  />
)

export default GalleonChest
