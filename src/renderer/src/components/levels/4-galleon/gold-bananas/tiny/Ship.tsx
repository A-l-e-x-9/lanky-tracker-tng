import { useTiny5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Tiny5Ship: React.FC = () => (
  <GalleonCheck
    id={4033}
    name="Tiny's Room"
    region="5 Door Ship"
    canGetLogic={useTiny5DoorShipGb()}
  />
)

export default Tiny5Ship
