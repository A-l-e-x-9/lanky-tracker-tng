import GBPool from '@renderer/components/pools/GB'
import { useDkBlastGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const CavesBlast: React.FC = () => {
const canDo = useDkBlastGb()
return (
<GBPool>
    <CavesCheck
      id={6001}
      name="Baboon Blast Barrel"
      region="Crystal Caves Main"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
    </GBPool>
)
}

export default CavesBlast
