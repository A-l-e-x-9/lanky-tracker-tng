import GBPool from '@renderer/components/pools/GB'
import { useDkTreeGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkTree: React.FC = () => {
const canDo = useDkTreeGb()
return (
<GBPool>
    <CastleCheck
      id={7001}
      name="DK's Tree Sniping"
      region="Creepy Castle Main"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
    </GBPool>
)
}

export default DkTree
