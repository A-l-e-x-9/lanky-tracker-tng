import GBPool from '@renderer/components/pools/GB'
import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useChunkyMineGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyMinecart: React.FC = () => {
const canDo = useChunkyMineGb()
return (
<GBPool>
  <ToughGoldenBanana>
    <ForestCheck
      id={5040}
      name="Chunky's Well Minecart"
      region="Forest Central Area"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
  </ToughGoldenBanana>
  </GBPool>
)
}

export default ChunkyMinecart
