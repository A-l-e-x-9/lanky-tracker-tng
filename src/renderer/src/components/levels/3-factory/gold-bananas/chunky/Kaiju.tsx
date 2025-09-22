import { useChunkyKaijuGb } from '@renderer/src/hooks/factory'
import FactoryCheck from '../../check'

const ToyMonster: React.FC = () => {
  const inLogic = useChunkyKaijuGb()
  return (
  <FactoryCheck
    id={3040}
    name="Factory Chunky Toy Monster"
    region="R&D Area"
    canGetLogic={inLogic.in}
    canGetBreak={inLogic.out}
  />
  )
}

export default ToyMonster
