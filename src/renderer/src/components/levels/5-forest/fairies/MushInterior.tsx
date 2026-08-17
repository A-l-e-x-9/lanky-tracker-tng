import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useForestMushroomTop } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import ForestCheck from '../check'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  const canReachShroomTop = useForestMushroomTop()
  const hasCam = useCamera()
  return (
    <FairyPool>
      <ForestCheck
        id={45016}
        name="Shuffled Fairy: Lower area"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={45017}
        name="Shuffled Fairy: Upper area"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachShroomTop.in && hasCam}
        canGetBreak={canReachShroomTop.out && hasCam}
      />
    </FairyPool>
  )
}

const MillsFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default MillsFairies
