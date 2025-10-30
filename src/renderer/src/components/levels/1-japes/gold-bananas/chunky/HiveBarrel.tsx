import GBPool from '@renderer/components/pools/GB'
import { useChunkyHiveGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const HiveBarrel: React.FC = () => {
  const chunkyHiveGb = useChunkyHiveGb()
  return (
  <GBPool>
    <JapesCheck
      id={1042}
      name="Chunky's Giant Bonus Barrel"
      region="Hive Area"
      canGetLogic={chunkyHiveGb.in}
      canGetBreak={chunkyHiveGb.out}
    />
    </GBPool>
  )
}

export default HiveBarrel
