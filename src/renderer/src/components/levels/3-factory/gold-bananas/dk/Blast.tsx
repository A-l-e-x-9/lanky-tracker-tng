import { useDkBlastGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const FactoryBlast: React.FC = () => {
  return (
    <FactoryCheck id={3003} name="Barrel Blast course and/or DK Arcade Round 1" region="Storage and Arcade Area" canGetLogic={useDkBlastGb()} />
  )
}

export default FactoryBlast
