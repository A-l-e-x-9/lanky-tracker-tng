//hope VerdantAsh doesn't blow a gasket...okay, maybe I do! >xD
import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const ChunkyIgloo: React.FC = () => {
const thatFuckingRabbit = useChunkyIglooGb()
const isKillTheWabbit = useKRoolKontracts('Kill the Wabbit') ? 'foolish' : ''
if (isKillTheWabbit) {
return (
<GBPool>
  <CavesCheck
    id={6042}
    name="Chunky's 5-Door Igloo Room"
    region="Caves Igloo"
    canGetLogic={thatFuckingRabbit.in}
    canGetBreak={thatFuckingRabbit.out}
  />
</GBPool>
)
} else {
return (
<GBPool>
<Miniboss>
  <CavesCheck
    id={6042}
    name="Chunky's 5-Door Igloo Room"
    region="Caves Igloo"
    canGetLogic={thatFuckingRabbit.in}
    canGetBreak={thatFuckingRabbit.out}
  />
</Miniboss>
</GBPool>
)
}
}

export default ChunkyIgloo
