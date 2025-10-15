import { useTinySubGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const TinySub: React.FC = () => (
  <GalleonCheck
    id={4031}
    name="Tiny's Foghorn/Sub Barrel"
    region="Shipyard Outskirts"
    canGetLogic={useTinySubGb()}
  />
)

export default TinySub
