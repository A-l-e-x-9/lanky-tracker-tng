import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useJapesHive } from '@renderer/hooks/japes'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const canReachHiveArea = useJapesHive()
  return (
    <FairyPool>
      <JapesCheck
        id={41005}
        name="Shuffled Fairy: In the hive zone"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in && hasCam}
        canGetBreak={canReachHiveArea.out && hasCam}
      />
      <JapesCheck
        id={41006}
        name="Shuffled Fairy: In the hive itself"
        region="Hive Area"
        canGetLogic={canGoInHive.in && hasCam}
        canGetBreak={canGoInHive.out && hasCam}
      />
    </FairyPool>
  )
}

const HiveFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default HiveFairies
