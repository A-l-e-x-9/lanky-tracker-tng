import { useChunkyArcadeGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ArcadeBarrel: React.FC = () => (
  <FactoryCheck
    id={3042}
    name="Chunky's Barrel by the Arcade"
    region="Storage And Arcade"
    canGetLogic={useChunkyArcadeGb()}
  />
)

export default ArcadeBarrel
