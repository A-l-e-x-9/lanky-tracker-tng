import { useLankyFreeChunkyGb } from '@renderer/hooks/factory'
import KongCheck from '@renderer/components/pools/Kong'
import FactoryCheck from '../../check'

const ChunkyCage: React.FC = () => {
const logic = useLankyFreeChunkyGb()
return (
<KongCheck>
  <FactoryCheck
    id={3025}
    name="Chunky's Cage"
    region="Storage and Arcade Area"
    canGetLogic={logic.in}
    canGetBreak={logic.out}
  />
</KongCheck>
)
}

export default ChunkyCage
