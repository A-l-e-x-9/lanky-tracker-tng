import { useDkFreeDiddyGb } from '@renderer/hooks/japes'
import KongCheck from '@renderer/components/pools/Kong'
import JapesCheck from '../../check'

const DiddyCage: React.FC = () => {
const canDo = useDkFreeDiddyGb()
return (
<KongCheck>
  <JapesCheck
    id={1005}
    name="Diddy's Cage"
    region="Japes Hillside"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
</KongCheck>
)
}

export default DiddyCage
