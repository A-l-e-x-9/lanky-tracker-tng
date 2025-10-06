import { useDkNumberGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const NumberGame: React.FC = () => (
  <FactoryCheck
    id={3001}
    name="DK's Number Game"
    region="Testing Room"
    canGetLogic={useDkNumberGb()}
  />
)

export default NumberGame
