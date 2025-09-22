import DropPool from '@renderer/src/components/pools/Drops'
import { useDefeatZinger } from '@renderer/src/hooks/enemies'
import { usePlayJapes } from '@renderer/src/hooks/japes'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import JapesCheck from '../check'

const JapesMainEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <JapesCheck
        id={1314}
        name="Japes Enemy: Near Painting 0"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1315}
        name="Japes Enemy: Near Painting 1"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1316}
        name="Japes Enemy: Near Painting 2"
        region="Japes Hillside"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <JapesCheck
        id={1317}
        name="Japes Enemy: Mountain"
        region="Japes Hillside"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <JapesCheck
        id={1414}
        name="Japes Enemy Photo: Near Painting 0"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <JapesCheck
        id={1415}
        name="Japes Enemy Photo: Near Painting 1"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <JapesCheck
        id={1416}
        name="Japes Enemy Photo: Near Painting 2"
        region="Japes Hillside"
        canGetLogic={inStage && hasFairyCam}
      />
      <JapesCheck
        id={1417}
        name="Japes Enemy Photo: Mountain"
        region="Japes Hillside"
        canGetLogic={inStage && hasFairyCam}
      />
    </DropPool>
  )
}

export default JapesMainEnemies
