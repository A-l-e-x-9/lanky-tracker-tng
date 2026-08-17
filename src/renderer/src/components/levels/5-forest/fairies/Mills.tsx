import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useRaftersFairy, usePlayForest, useForestDay, useForestNight, useForestDusk } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useClimbing, useBalloon } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const vanillaFairy2 = useRaftersFairy()
  const isInStage = usePlayForest()
  const hasBalloon = useBalloon()
  const hasClimbing = useClimbing()
  const isDay = useForestDay()
  const isNight = useForestNight()
  const isDusk = useForestDusk()
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
        id={45008}
        name="Shuffled Fairy: In the winch room"
        region="Forest Area 1"
        canGetLogic={isInStage.in && (isNight.in || isDusk.in) && hasClimbing && hasSlam && hasCam}
        canGetBreak={isInStage.out && (isNight.out || isDusk.out) && hasClimbing && hasSlam && hasCam}
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
