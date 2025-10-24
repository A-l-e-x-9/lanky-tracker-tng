import GBPool from '@renderer/components/pools/GB'
import { useChunkyArcadeGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ArcadeBarrel: React.FC = () => (
<GBPool>
  <FactoryCheck
    id={3042}
    name="Chunky's Barrel by the Arcade"
    region="Storage and Arcade Area"
    canGetLogic={useChunkyArcadeGb()}
  />
</GBPool>
)

export default ArcadeBarrel
