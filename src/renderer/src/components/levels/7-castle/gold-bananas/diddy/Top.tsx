import { useDiddyTopGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const CastleTop: React.FC = () => (
  <CastleCheck
    id={7010}
    name="Diddy's Barrel Above Lanky's Wind Tunnel"
    region="Creepy Castle Main"
    canGetLogic={useDiddyTopGb()}
  />
)

export default CastleTop
