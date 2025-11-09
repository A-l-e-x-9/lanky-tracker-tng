import { useDkBlastGb } from '@renderer/hooks/japes'
import GBPool from '@renderer/components/pools/GB'
import JapesCheck from '../../check'

const BaboonBlast: React.FC = () => {
const canDo = useDkBlastGb()
return (
<GBPool>
  <JapesCheck
    id={1004}
    name="Baboon Blast Course"
    region="Japes Lowlands"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
</GBPool>
)
}

export default BaboonBlast
