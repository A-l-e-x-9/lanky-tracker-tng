import GBPool from '@renderer/components/pools/GB'
import { useDkTreeGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkTree: React.FC = () => (
<GBPool>
    <CastleCheck
      id={7001}
      name="DK's Tree Sniping"
      region="Creepy Castle Main"
      canGetLogic={useDkTreeGb()}
    />
    </GBPool>
)

export default DkTree
