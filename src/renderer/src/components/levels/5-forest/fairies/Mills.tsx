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
        id={45001}
        name="Shuffled Fairy: Vanilla Location #2 (Diddy's dark room)"
        region="Forest Area 1"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
      />
      <ForestCheck
        id={45005}
        name="Shuffled Fairy: Above the main mill"
        region="Forest Area 1"
        canGetLogic={isInStage.in && (hasBalloon || hasClimbing) && hasCam}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={45006}
        name="Shuffled Fairy: Troff 'n' Scoff portal behind Thornvine"
        region="Forest Area 1"
        canGetLogic={(isNight.in || isDusk.in) && isBreathing.in}
        canGetBreak={(isNight.out || isDusk.out) && isBreathing.out}
      />
      <ForestCheck
        id={45007}
        name="Shuffled Fairy: Above Thornvine path"
        region="Forest Area 1"
        canGetLogic={(isNight.in || isDusk.in) && isBreathing.in}
        canGetBreak={(isNight.out || isDusk.out) && isBreathing.out}
      />
      <ForestCheck
        id={45009}
        name="Shuffled Fairy: In the front mill room"
        region="Forest Area 1"
        canGetLogic={(isDay.in || isDusk.in) && isBreathing.in}
        canGetBreak={(isDay.out || isDusk.out) && isBreathing.out}
      />
      <ForestCheck
        id={45010}
        name="Shuffled Fairy: In Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isInStage.in && (hasBalloon || hasClimbing) && (isNight.in || isDusk.in) && hasCam}
        canGetBreak={isInStage.out && (hasBalloon || hasClimbing) && (isNight.out || isDusk.out) && hasCam}
      />
    </FairyPool>
  )
}

const MillsFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default MillsFairies
