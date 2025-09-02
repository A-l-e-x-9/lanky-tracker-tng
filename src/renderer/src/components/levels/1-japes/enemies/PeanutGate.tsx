import DropPool from '@renderer/components/pools/Drops'
import { useJapesSideArea } from '@renderer/hooks/japes'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const PeanutGateEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const japesSide = useJapesSideArea()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <JapesCheck
        id={1301}
        name="Japes Enemy: Diddy Cavern"
        region="Japes Lowlands"
        canGetLogic={japesSide && anyKong}
      />
      <JapesCheck
        id={1401}
        name="Japes Enemy Photo: Diddy Cavern"
        region="Japes Lowlands"
        canGetLogic={japesSide && anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default PeanutGateEnemies
