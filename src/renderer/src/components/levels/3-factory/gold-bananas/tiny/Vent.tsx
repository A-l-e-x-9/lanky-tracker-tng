import { useTinyArcadeGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TinyVent: React.FC = () => (
  <FactoryCheck
    id={3032}
    name="Tiny's Vent Behind the Arcade"
    region="Storage and Arcade Area"
    canGetLogic={useTinyArcadeGb()}
  />
)

export default TinyVent
