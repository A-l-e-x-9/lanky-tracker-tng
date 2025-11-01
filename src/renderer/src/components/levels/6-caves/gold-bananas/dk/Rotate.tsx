import GBPool from '@renderer/components/pools/GB'
import { useDkRotateGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const RotatingCabin: React.FC = () => (
<GBPool>
  <CavesCheck
    id={6003}
    name="DK's Rotating Cabin"
    region="Caves Cabins"
    canGetLogic={useDkRotateGb()}
  />
  </GBPool>
)

export default RotatingCabin
