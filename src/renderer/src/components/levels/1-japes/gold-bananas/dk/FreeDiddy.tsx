import GBPool from '@renderer/components/pools/GB'
import { useDkFreeDiddyGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const FreeDiddy: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1002}
    name="Freeing Diddy Kong"
    region="Japes Hillside"
    canGetLogic={useDkFreeDiddyGb()}
  />
  </GBPool>
)

export default FreeDiddy
