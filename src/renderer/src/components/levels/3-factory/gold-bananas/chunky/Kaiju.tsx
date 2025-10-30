import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyKaijuGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ToyMonster: React.FC = () => {
  const inLogic = useChunkyKaijuGb()
  return (
  <GBPool>
<Miniboss>
  <FactoryCheck
    id={3040}
    name="Chunky's Toy Monster Battle"
    region="R&D Room"
    canGetLogic={inLogic.in}
    canGetBreak={inLogic.out}
  />
</Miniboss>
</GBPool>
  )
}

export default ToyMonster
