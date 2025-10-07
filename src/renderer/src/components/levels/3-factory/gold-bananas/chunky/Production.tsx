import { useChunkyProductionGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ChunkyProduction: React.FC = () => (
  <FactoryCheck
    id={3043}
    name="Chunky's Production Timer"
    region="Prod Room"
    canGetLogic={useChunkyProductionGb()}
  />
)

export default ChunkyProduction
