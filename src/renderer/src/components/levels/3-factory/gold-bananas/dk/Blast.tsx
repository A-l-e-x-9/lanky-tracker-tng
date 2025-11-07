import GBPool from '@renderer/components/pools/GB'
import { useDkBlastGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const FactoryBlast: React.FC = () => {
const canDo = useDkBlastGb()
  return (
  <GBPool>
    <FactoryCheck id={3003} name="Barrel Blast course (and possibly DK Arcade Round 1)" region="Storage and Arcade Area"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
    </GBPool>
  )
}

export default FactoryBlast
