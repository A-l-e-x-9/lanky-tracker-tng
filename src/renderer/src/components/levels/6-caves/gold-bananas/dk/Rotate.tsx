import { useDkRotateGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const RotatingCabin: React.FC = () => (
  <CavesCheck
    id={6003}
    name="DK's Rotating Cabin"
    region="Caves Cabins"
    canGetLogic={useDkRotateGb()}
  />
)

export default RotatingCabin
