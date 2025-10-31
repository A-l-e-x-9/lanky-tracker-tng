import GBPool from '@renderer/components/pools/GB'
import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useChunkyMineGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyMinecart: React.FC = () => (
<GBPool>
  <ToughGoldenBanana>
    <ForestCheck
      id={5040}
      name="Chunky's Well Minecart"
      region="Forest Central Area"
      canGetLogic={useChunkyMineGb()}
    />
  </ToughGoldenBanana>
  </GBPool>
)

export default ChunkyMinecart
