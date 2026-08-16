import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useBarnFairy, usePlayForest, useForestNight, useForestDusk, useSlamForest, useForestSpiderBoss, useArena, useForestMushroomRoof, useForestMushroomTop, useForestOwl, useTinyAntGb } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useRocket, useClimbing, useVine } from '@renderer/hooks/kongs'
import ForestCheck from '../check'
import CenterFairies from './Center'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const vanillaFairy1 = useBarnFairy()
  const isInStage = usePlayForest()
  const hasJetbarrel = useRocket()
  const hasClimbing = useClimbing()
  const hasVines = useVine()
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
        id={45013}
        name="Shuffled Fairy: Over DK's Blast pad"
        region="Forest Area 3"
        canGetLogic={(hasClimbing || hasJetbarrel) && isBreathing.in}
        canGetBreak={(hasClimbing || hasJetbarrel) && isBreathing.out}
      />
      <ForestCheck
        id={45015}
        name="Shuffled Fairy: At the top of the mushroom"
        region="Forest Area 3"
        canGetLogic={canReachShroomRoof.in && hasCam}
        canGetBreak={canReachShroomRoof.out && hasCam}
      />
    </FairyPool>
  )
}

const MushExteriorFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default MushExteriorFairies
