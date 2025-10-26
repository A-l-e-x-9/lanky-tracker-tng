import GBPool from '@renderer/components/pools/GB'
/*import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'*/
import { useDkBlastGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ForestBlast: React.FC = () => (
/*  <ToughGoldenBanana>*/
<GBPool>
    <ForestCheck
      id={5001}
      name="Baboon Blast Barrel"
      region="Forest Area 3"
      canGetLogic={useDkBlastGb()}
    />
    </GBPool>
/*  </ToughGoldenBanana>*/
)

export default ForestBlast
