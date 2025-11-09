import GBPool from '@renderer/components/pools/GB'
import { useDkFreeDiddyGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const FreeDiddy: React.FC = () => {
const canDo = useDkFreeDiddyGb()
return (
<GBPool>
  <JapesCheck
    id={1002}
    name="Freeing Diddy Kong"
    region="Japes Hillside"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default FreeDiddy
