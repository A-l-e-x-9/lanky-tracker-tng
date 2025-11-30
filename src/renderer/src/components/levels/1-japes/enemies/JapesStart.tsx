import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const JapesStartEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <JapesCheck
        id={1300}
        name="Enemy at Start"
        region="Japes Lowlands"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <JapesCheck
        id={1302}
        name="Enemy 0 in Early Tunnel"
        region="Japes Lowlands"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <JapesCheck
        id={1303}
        name="Enemy 1 in Early Tunnel"
        region="Japes Lowlands"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <JapesCheck
        id={1312}
        name="Enemy Killed in the Title Screen's Demo"
        region="Japes Lowlands"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <JapesCheck
        id={1313}
        name="Zinger Near Enemy Killed in the Demo"
        region="Japes Lowlands"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
    </DropPool>
  )
}

export default JapesStartEnemies
