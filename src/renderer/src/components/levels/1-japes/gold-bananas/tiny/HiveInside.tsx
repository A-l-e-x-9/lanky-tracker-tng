import { useTinyHiveGb } from '@renderer/src/hooks/japes'
import JapesCheck from '../../check'

const HiveInside: React.FC = () => {
  const hiveGb = useTinyHiveGb()
  return (
    <JapesCheck
      id={1033}
      name="Japes Tiny Inside the Hive"
      region="Hive Tunnel Area"
      canGetLogic={hiveGb.in}
      canGetBreak={hiveGb.out}
    />
  )
}

export default HiveInside
