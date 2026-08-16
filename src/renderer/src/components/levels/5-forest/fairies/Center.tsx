import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useBarnFairy, useRaftersFairy, usePlayForest, useForestDay, useForestNight, useForestDusk, useSlamForest, useForestSpiderBoss, useArena, useForestMushroomRoof, useForestMushroomTop, useForestOwl, useTinyAntGb } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useRocket, useClimbing, useVine, useBalloon } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const vanillaFairy1 = useBarnFairy()
  const vanillaFairy2 = useRaftersFairy()
  const isInStage = usePlayForest()
  const hasJetbarrel = useRocket()
  const hasBalloon = useBalloon()
  const hasClimbing = useClimbing()
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
