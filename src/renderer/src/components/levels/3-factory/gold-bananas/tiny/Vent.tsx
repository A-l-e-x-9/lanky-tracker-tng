import GBPool from '@renderer/components/pools/GB'
import { useTinyArcadeGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TinyVent: React.FC = () => (
<GBPool>
  <FactoryCheck
    id={3032}
    name="Tiny's Vent Behind the Arcade"
    region="Storage and Arcade Area"
    canGetLogic={useTinyArcadeGb()}
  />
  </GBPool>
)

export default TinyVent
