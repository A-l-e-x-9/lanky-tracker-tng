import DropPool from '@renderer/components/pools/Drops'
import { useDefeatPurpleKlaptrap, useDefeatZinger } from '@renderer/hooks/enemies'
import { useJapesHive, useSlamJapes } from '@renderer/hooks/japes'
import { useMini } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const HiveInteriorEnemies: React.FC = () => {
  const hiveOut = useJapesHive()
  const hiveIn = useMini() && hiveOut
  const zinger = useDefeatZinger()
  const klaptrap = useDefeatPurpleKlaptrap()
  const canSlam = useSlamJapes()
  return (
    <DropPool>
      <JapesCheck
        id={1342}
        name="Enemy in the Hive's Main Room"
        region="Hive Area"
        canGetLogic={hiveIn && zinger.in}
        canGetBreak={hiveIn && zinger.out}
      />
      <JapesCheck
        id={1335}
        name="Enemy in the Hive's First Room"
        region="Hive Area"
        canGetLogic={hiveIn && klaptrap}
      />
      <JapesCheck
        id={1336}
        name="Enemy 0 in the Hive's Second Room"
        region="Hive Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1337}
        name="Enemy 1 in the Hive's Second Room"
        region="Hive Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1338}
        name="Enemy 0 in the Hive's Third Room"
        region="Hive Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1339}
        name="Enemy 1 in the Hive's Third Room"
        region="Hive Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1340}
        name="Enemy 2 in the Hive's Third Room"
        region="Hive Area"
        canGetLogic={hiveIn && zinger.in && canSlam}
        canGetBreak={hiveIn && zinger.out && canSlam}
      />
      <JapesCheck
        id={1341}
        name="Enemy 3 in the Hive's Third Room"
        region="Hive Area"
        canGetLogic={hiveIn && zinger.in && canSlam}
        canGetBreak={hiveIn && zinger.out && canSlam}
      />
    </DropPool>
  )
}

export default HiveInteriorEnemies
