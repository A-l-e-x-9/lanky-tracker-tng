import GBPool from '@renderer/components/pools/GB'
import { useDiddyMountainGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const TopMountain: React.FC = () => {
const canDo = useDiddyMountainGb()
return (
<GBPool>
  <JapesCheck
    id={1011}
    name="Top of Diddy's Mountain"
    region="Japes Hillside"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default TopMountain
