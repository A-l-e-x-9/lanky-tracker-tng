import { useTinyHiveGb } from '@renderer/hooks/japes'
import GBPool from '@renderer/components/pools'
import JapesCheck from '../../check'

const HiveInside: React.FC = () => {
  const hiveGb = useTinyHiveGb()
  return (
  <GBPool>
    <JapesCheck
      id={1033}
      name="Inside Tiny's Hive"
      region="Hive Area"
      canGetLogic={hiveGb}
    />
  </GBPool>
  )
}

export default HiveInside
