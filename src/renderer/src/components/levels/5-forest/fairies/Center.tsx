import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useForestMushroomTop, useForestOwl, useTinyAntGb } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  const canReachShroomTop = useForestMushroomTop()
  const canReachArea4 = useForestOwl()
  const canReachTreeStump = useTinyAntGb()
  return (
    <FairyPool>
      <ForestCheck
        id={45002}
        name="Shuffled Fairy: Above Area 1's tunnel, clock-side"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={45003}
        name="Shuffled Fairy: At the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </FairyPool>
  )
}

const CenterFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default CenterFairies
