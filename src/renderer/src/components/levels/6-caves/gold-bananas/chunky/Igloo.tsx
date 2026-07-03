//hope VerdantAsh doesn't blow a gasket...okay, maybe I do! >xD
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const ChunkyIgloo: React.FC = () => {
const thatFuckingRabbit = useChunkyIglooGb()
const isKillTheWabbit = useDonkStore(useShallow((state) => state.winCondition.killTheWabbit))
if (isKillTheWabbit) {
return (
<GBPool>
  <CavesCheck
    id={6042}
    name="Chunky's 5-Door Igloo Room (SHOOT THIS BASTARD NOW!!!)"
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
