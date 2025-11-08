import GBPool from '@renderer/components/pools/GB'
import { useDiddyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DiddyIgloo: React.FC = () => {
const canDo = useDiddyIglooGb()
return (
<GBPool>
  <CavesCheck
    id={6011}
    name="Diddy's 5 Door Igloo"
    region="Caves Igloo"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default DiddyIgloo
