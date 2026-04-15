import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useRambiFairy, useJapesKongGates } from '@renderer/hooks/japes'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const vanillaFairy1 = useRambiFairy()
  const canGoPastGates = useJapesKongGates()
  return (
    <FairyPool>
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

const StormyFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default StormyFairies
