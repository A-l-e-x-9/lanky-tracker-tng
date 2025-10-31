import GBPool from '@renderer/components/pools/GB'
import { useChunkyProductionGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ChunkyProduction: React.FC = () => (
<GBPool>
  <FactoryCheck
    id={3043}
    name="Chunky's Production Timer"
    region="Prod Room"
    canGetLogic={useChunkyProductionGb()}
  />
  </GBPool>
)

export default ChunkyProduction
