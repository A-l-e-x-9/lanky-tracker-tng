import FairyPool from '@renderer/components/pools/Fairies'
import { useRambiFairy, useJapesHive, useTinyHiveGb, useJapesKongGates } from '@renderer/hooks/japes'
import { useCamera } from '@renderer/hooks/kongs'
import JapesCheck from '../check'
import LowlandFairies from './Lowlands'
import HillsideFairies from './Hillside'
import MineFairies from './Mine'

const ShuffledFairies: React.FC = () => {
  const hasCam = useCamera()
  const vanillaFairy1 = useRambiFairy()
  const canGoPastGates = useJapesKongGates()
  const canReachHiveArea = useJapesHive()
  const canGoInHive = useTinyHiveGb()
  return (
    <FairyPool>
      <LowlandFairies />
      <HillsideFairies />
      <MineFairies />
      <JapesCheck
        id={41000}
        name="Shuffled Fairy: Vanilla Location #1 (pool after Rambi door)"
        region="Stormy Area"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
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
      <JapesCheck
        id={41007}
        name="Shuffled Fairy: At Cranky's"
        region="Stormy Area"
        canGetLogic={canGoPastGates.in && hasCam}
        canGetBreak={canGoPastGates.out && hasCam}
      />
    </FairyPool>
  )
}

export default ShuffledFairies
