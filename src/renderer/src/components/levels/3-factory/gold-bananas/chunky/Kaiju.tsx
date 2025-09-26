import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyKaijuGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ToyMonster: React.FC = () => {
  const inLogic = useChunkyKaijuGb()
  return (
<Miniboss>
  <FactoryCheck
    id={3040}
    name="Factory Chunky Toy Monster"
    region="R&D Area"
    canGetLogic={inLogic.in}
    canGetBreak={inLogic.out}
  />
</Miniboss>
  )
}

export default ToyMonster
