//hope VerdantAsh doesn't blow a gasket...okay, maybe I do! >xD
import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const ChunkyIgloo: React.FC = () => (
<Miniboss>
  <CavesCheck
    id={6042}
    name="Caves Chunky 5 Door Igloo"
    region="Igloo Area"
    canGetLogic={useChunkyIglooGb()}
  />
</Miniboss>
)

export default ChunkyIgloo
