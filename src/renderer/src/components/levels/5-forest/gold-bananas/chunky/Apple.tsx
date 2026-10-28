import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyAppleGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyApple: React.FC = () => {
const canDo = useChunkyAppleGb()
return (
<GBPool>
<Miniboss>
  <ForestCheck
    id={5043}
    name="Chunky's Apple Rescue"
    region="Forest Area 2"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
</Miniboss>
</GBPool>
)
}

export default ChunkyApple
