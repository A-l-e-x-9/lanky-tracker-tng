import { useTinyHiveGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const HiveInside: React.FC = () => {
  const hiveGb = useTinyHiveGb()
  return (
    <JapesCheck
      id={1033}
      name="Inside Tiny's Hive"
      region="Hive Area"
      canGetLogic={hiveGb.in}
      canGetBreak={hiveGb.out}
    />
  )
}

export default HiveInside
