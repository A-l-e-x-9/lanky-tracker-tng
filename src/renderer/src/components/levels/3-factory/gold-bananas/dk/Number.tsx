import GBPool from '@renderer/components/pools/GB'
import { useDkNumberGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const NumberGame: React.FC = () => (
<GBPool>
  <FactoryCheck
    id={3001}
    name="DK's Number Game"
    region="Testing Room"
    canGetLogic={useDkNumberGb()}
  />
  </GBPool>
)

export default NumberGame
