import { useLankyGreenhouseGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyGreenhouse: React.FC = () => (
  <CastleCheck
    id={7021}
    name="Lanky's Greenhouse"
    region="Creepy Castle Main"
    canGetLogic={useLankyGreenhouseGb()}
  />
)

export default LankyGreenhouse
