import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayJapes, useJapesMine } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const JapesMainEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()
  const zinger = useDefeatZinger()
  const canReachMtn = useJapesMine()
  return (
    <DropPool>
      <JapesCheck
        id={1314}
        name="Enemy Near Painting 0"
        region="Japes Hillside"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <JapesCheck
        id={1315}
        name="Enemy Near Painting 1"
        region="Japes Hillside"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <JapesCheck
        id={1316}
        name="Enemy Near Painting 2"
        region="Japes Hillside"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <JapesCheck
        id={1317}
        name="Enemy at Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={inStage.in && canReachMtn.in && zinger.in}
        canGetBreak={inStage.out && canReachMtn.out && zinger.out}
      />
    </DropPool>
  )
}

export default JapesMainEnemies
