import GBPool from '@renderer/components/pools/GB'
import { useDkBlastGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ForestBlast: React.FC = () => (
<GBPool>
    <ForestCheck
      id={5001}
      name="Baboon Blast Barrel"
      region="Forest Area 3"
      canGetLogic={useDkBlastGb()}
    />
    </GBPool>
)

export default ForestBlast
