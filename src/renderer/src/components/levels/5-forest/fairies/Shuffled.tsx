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
        id={45000}
        name="Shuffled Fairy: Vanilla Location #1 (Thornvine Barn)"
        region="Forest Area 1"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <ForestCheck
        id={45004}
        name="Shuffled Fairy: Top of Chunky's minecart entrance"
        region="Forest Central Area"
        canGetLogic={isInStage.in && (hasJetbarrel || (hasClimbing && hasVines)) && hasCam}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={45008}
        name="Shuffled Fairy: In the winch room"
        region="Forest Area 1"
        canGetLogic={isInStage.in && (isNight.in || isDusk.in) && hasClimbing && hasSlam && hasCam}
        canGetBreak={isInStage.out && (isNight.out || isDusk.out) && hasClimbing && hasSlam && hasCam}
      />
      <ForestCheck
        id={45011}
        name="Shuffled Fairy: In the back mill room"
        region="Forest Area 1"
        canGetLogic={canReachSpiderBoss.in && hasCam}
        canGetBreak={canReachSpiderBoss.out && hasCam}
      />
      <ForestCheck
        id={45012}
        name="Shuffled Fairy: Not afraid of spiders"
        region="Forest Area 1"
        canGetLogic={canReachSpiderBoss.in && hasCam}
        canGetBreak={canReachSpiderBoss.out && hasCam}
      />
      <ForestCheck
        id={45013}
        name="Shuffled Fairy: Over DK's Blast pad"
        region="Forest Area 3"
        canGetLogic={(hasClimbing || hasJetbarrel) && isBreathing.in}
        canGetBreak={(hasClimbing || hasJetbarrel) && isBreathing.out}
      />
      <ForestCheck
        id={45014}
        name="Shuffled Fairy: At the Battle Arena"
        region="Forest Area 3"
        canGetLogic={canReachArena.in && hasCam}
        canGetBreak={canReachArena.out && hasCam}
      />
      <ForestCheck
        id={45015}
        name="Shuffled Fairy: At the top of the mushroom"
        region="Forest Area 3"
        canGetLogic={canReachShroomRoof.in && hasCam}
        canGetBreak={canReachShroomRoof.out && hasCam}
      />
      <ForestCheck
        id={45017}
        name="Shuffled Fairy: Upper area"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachShroomTop.in && hasCam}
        canGetBreak={canReachShroomTop.out && hasCam}
      />
      <ForestCheck
        id={45018}
        name="Shuffled Fairy: In the big tree's tunnel"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasCam}
        canGetBreak={canReachArea4.out && hasCam}
      />
      <ForestCheck
        id={45019}
        name="Shuffled Fairy: Twying to KILL THE WABBIT"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasCam}
        canGetBreak={canReachArea4.out && hasCam}
      />
      <ForestCheck
        id={45020}
        name="Shuffled Fairy: At Area 4's Troff 'n' Scoff portal"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasCam}
        canGetBreak={canReachArea4.out && hasCam}
      />
      <ForestCheck
        id={45021}
        name="Shuffled Fairy: Looking for The Bean™"
        region="Forest Area 4"
        canGetLogic={canReachTreeStump.in && hasCam}
        canGetBreak={canReachTreeStump.out && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
