import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useForestDay, useForestNight, useForestDusk, useSlamForest, useForestSpiderBoss, useArena, useForestMushroomRoof, useForestMushroomTop, useForestOwl, useTinyAntGb } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useVine } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  const hasVines = useVine()
  const isDay = useForestDay()
  const isNight = useForestNight()
  const isDusk = useForestDusk()
  const hasSlam = useSlamForest()
  const canReachSpiderBoss = useForestSpiderBoss()
  const canReachArena = useArena()
  const canReachShroomRoof = useForestMushroomRoof()
  const canReachShroomTop = useForestMushroomTop()
  const canReachArea4 = useForestOwl()
  const canReachTreeStump = useTinyAntGb()
  return (
    <FairyPool>
      <ForestCheck
        id={45016}
        name="Shuffled Fairy: Lower area"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </FairyPool>
  )
}

const MillsFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default MillsFairies
