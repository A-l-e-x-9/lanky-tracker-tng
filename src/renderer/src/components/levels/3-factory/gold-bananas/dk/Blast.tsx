import GBPool from '@renderer/components/pools/GB'
import { NintendoCoinPool } from '@renderer/components/pools/Company'
import { useDkBlastGb } from '@renderer/hooks/factory'
import { useFastArcade } from '@renderer/hooks/fast-checks'
import FactoryCheck from '../../check'

const FactoryBlast: React.FC = () => {
const canDo = useDkBlastGb()
const fastArcade = useFastArcade()
if (fastArcade) {
  return (
  <GBPool>
    <FactoryCheck id={3003} name="Barrel Blast course" region="Storage and Arcade Area"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
    </GBPool>
  )
  } else {
  return (
  <NintendoCoinPool>
    <FactoryCheck id={3003} name="Barrel Blast course + DK Arcade Round 1" region="Storage and Arcade Area"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
    </NintendoCoinPool>
  )
  }
}

export default FactoryBlast
