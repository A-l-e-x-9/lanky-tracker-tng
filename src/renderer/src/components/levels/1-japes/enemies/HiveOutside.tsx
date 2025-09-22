import DropPool from '@renderer/src/components/pools/Drops'
import { useDefeatZinger } from '@renderer/src/hooks/enemies'
import { useJapesHive } from '@renderer/src/hooks/japes'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import JapesCheck from '../check'

const HiveOutsideEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const hiveOut = useJapesHive()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <JapesCheck
        id={1307}
        name="Japes Enemy: Hive Area 0"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && zinger.in}
        canGetBreak={hiveOut && zinger.out}
      />
      <JapesCheck
        id={1308}
        name="Japes Enemy: Hive Area 1"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && zinger.in}
        canGetBreak={hiveOut && zinger.out}
      />
      <JapesCheck
        id={1309}
        name="Japes Enemy: Hive Area 2"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && zinger.in}
        canGetBreak={hiveOut && zinger.out}
      />
      <JapesCheck
        id={1310}
        name="Japes Enemy: Hive Area 3"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && anyKong}
      />
      <JapesCheck
        id={1311}
        name="Japes Enemy: Hive Area 4"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && anyKong}
      />
      <JapesCheck
        id={1407}
        name="Japes Enemy Photo: Hive Area 0"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && hasFairyCam}
      />
      <JapesCheck
        id={1408}
        name="Japes Enemy Photo: Hive Area 1"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && hasFairyCam}
      />
      <JapesCheck
        id={1409}
        name="Japes Enemy Photo: Hive Area 2"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && hasFairyCam}
      />
      <JapesCheck
        id={1410}
        name="Japes Enemy Photo: Hive Area 3"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && anyKong && hasFairyCam}
      />
      <JapesCheck
        id={1411}
        name="Japes Enemy Photo: Hive Area 4"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default HiveOutsideEnemies
