import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useJapesHive } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const HiveOutsideEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const hiveOut = useJapesHive()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <JapesCheck
        id={1307}
        name="Enemy 0 Outside the Hive"
        region="Hive Area"
        canGetLogic={hiveOut && zinger.in}
        canGetBreak={hiveOut && zinger.out}
      />
      <JapesCheck
        id={1308}
        name="Enemy 1 Outside the Hive"
        region="Hive Area"
        canGetLogic={hiveOut && zinger.in}
        canGetBreak={hiveOut && zinger.out}
      />
      <JapesCheck
        id={1309}
        name="Enemy 2 Outside the Hive"
        region="Hive Area"
        canGetLogic={hiveOut && zinger.in}
        canGetBreak={hiveOut && zinger.out}
      />
      <JapesCheck
        id={1310}
        name="Enemy 3 Outside the Hive"
        region="Hive Area"
        canGetLogic={hiveOut && anyKong}
      />
      <JapesCheck
        id={1311}
        name="Enemy 4 Outside the Hive"
        region="Hive Area"
        canGetLogic={hiveOut && anyKong}
      />
    </DropPool>
  )
}

export default HiveOutsideEnemies
