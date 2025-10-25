import { useLankyFreeChunkyGb } from '@renderer/hooks/factory'
import GBPool from '@renderer/components/pools/GB'
import FactoryCheck from '../../check'

const FreeChunky: React.FC = () => {
const logic = useLankyFreeChunkyGb()
return (
<GBPool>
  <FactoryCheck
    id={3022}
    name="Freeing Chunky Kong"
    region="Storage and Arcade Area"
    canGetLogic={logic.in}
    canGetBreak={logic.out}
  />
</GBPool>
)
}

export default FreeChunky
