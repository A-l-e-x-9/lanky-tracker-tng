import FairyPool from '@renderer/components/pools/Fairies'
import { useRambiFairy, useTinyHiveGb, useJapesKongGates } from '@renderer/hooks/japes'
import { useCamera } from '@renderer/hooks/kongs'
import JapesCheck from '../check'
import LowlandFairies from './Lowlands'
import HillsideFairies from './Hillside'
import MineFairies from './Mine'
import HiveFairies from './Hive'

const ShuffledFairies: React.FC = () => {
  const hasCam = useCamera()
  const vanillaFairy1 = useRambiFairy()
  const canGoPastGates = useJapesKongGates()
  const canGoInHive = useTinyHiveGb()
  return (
    <FairyPool>
      <LowlandFairies />
      <HillsideFairies />
      <MineFairies />
      <HiveFairies />
      <JapesCheck
        id={41000}
        name="Shuffled Fairy: Vanilla Location #1 (pool after Rambi door)"
        region="Stormy Area"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
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
