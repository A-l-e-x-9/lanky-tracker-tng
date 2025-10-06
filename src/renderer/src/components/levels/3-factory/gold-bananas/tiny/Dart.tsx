import { useTinyDartGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TinyDartboard: React.FC = () => (
  <FactoryCheck
    id={3030}
    name="Tiny's Dartboard"
    region="Testing Room"
    canGetLogic={useTinyDartGb()}
  />
)

export default TinyDartboard
