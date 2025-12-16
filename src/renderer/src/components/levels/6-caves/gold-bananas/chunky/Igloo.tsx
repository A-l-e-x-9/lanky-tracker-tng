//hope VerdantAsh doesn't blow a gasket...okay, maybe I do! >xD
import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const ChunkyIgloo: React.FC = () => {
const thatFuckingRabbit = useChunkyIglooGb()
return (
<GBPool>
<Miniboss>
  <CavesCheck
    id={6042}
    name="Chunky's 5-Door Igloo Room (with that damn rabbit)"
    region="Caves Igloo"
    canGetLogic={thatFuckingRabbit.in}
    canGetBreak={thatFuckingRabbit.out}
  />
</Miniboss>
</GBPool>
)
}

export default ChunkyIgloo
