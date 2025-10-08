import { useTinyCaveGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const MiniBarrel: React.FC = () => (
  <CavesCheck
    id={6030}
    name="Tiny's Mini Cave Barrel"
    region="Crystal Caves Main"
    canGetLogic={useTinyCaveGb()}
  />
)

export default MiniBarrel
