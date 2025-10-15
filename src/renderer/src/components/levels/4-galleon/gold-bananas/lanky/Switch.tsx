import { useLanky2DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Lanky2Ship: React.FC = () => (
  <GalleonCheck
    id={4022}
    name="Lanky's 2 Door Ship Room"
    region="Shipyard Outskirts"
    canGetLogic={useLanky2DoorShipGb()}
  />
)

export default Lanky2Ship
