import GBPool from '@renderer/components/pools/GB'
import { useChunkyGoneGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const EarlyGone: React.FC = () => {
const canDo = useChunkyGoneGb()
return (
<GBPool>
  <CavesCheck
    id={6040}
    name="Chunky's Gorilla Gone Room Near the Start"
    region="Crystal Caves Main"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default EarlyGone
