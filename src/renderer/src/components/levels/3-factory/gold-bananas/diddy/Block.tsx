import { useDiddyBlockGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const BlockTower: React.FC = () => {
  const blockGb = useDiddyBlockGb()
  return (
    <FactoryCheck
      id={3010}
      name="Diddy's Block Tower"
      region="Testing Room"
      canGetLogic={blockGb.in}
      canGetBreak={blockGb.out}
    />
  )
}

export default BlockTower
