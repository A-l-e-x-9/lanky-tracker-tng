import GBPool from '@renderer/components/pools/GB'
import { useChunkyGoneGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const EarlyGone: React.FC = () => (
<GBPool>
  <CavesCheck
    id={6040}
    name="Chunky's Gorilla Gone Room Near the Start"
    region="Crystal Caves Main"
    canGetLogic={useChunkyGoneGb()}
  />
  </GBPool>
)

export default EarlyGone
