import { useLankyCastleGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const CastleSlam: React.FC = () => (
  <CavesCheck
    id={6021}
    name="Ice Castle Slamming"
    region="Crystal Caves Main"
    canGetLogic={useLankyCastleGb()}
  />
)

export default CastleSlam
