import DropPool from '@renderer/components/pools/Drops'
import {
  useDefeatBat,
  useDefeatKlump,
  useDefeatKosha,
  useDefeatZinger
} from '@renderer/hooks/enemies'
import { useForestDay, useForestNight, usePlayForest, useSlamForest } from '@renderer/hooks/forest'
import { useAnyKong, useDiddy, useDk, usePunch, useStrong, useMini, useClimbing } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const MillsEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const bat = useDefeatBat()
  const kosha = useDefeatKosha()
  const anyKong = useAnyKong()
  const diddy = useDiddy()
  const dk = useDk()
  const strong = useStrong()
  const night = useForestNight()
  const day = useForestDay()
  const punch = usePunch()
  const hasMiniMonkey = useMini()
  const hasClimbing = useClimbing()
  return (
    <DropPool>
      <ForestCheck
        id={5304}
        name="Enemy Near Snide's"
        region="Forest Area 1"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5305}
        name="Enemy Near the Infamous Dirt Patch"
        region="Forest Area 1"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5306}
        name="Enemy Near the Dark Attic"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5307}
        name="Enemy Near the Well Exit"
        region="Forest Area 1"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5308}
        name="Enemy Near the Blue Tunnel"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5309}
        name="Enemy in the Front Mill"
        region="Forest Area 1"
        canGetLogic={day.in && zinger.in}
        canGetBreak={day.out && zinger.out}
      />
      <ForestCheck
        id={5310}
        name="Enemy in the Back Mill"
        region="Forest Area 1"
        canGetLogic={day.in && (punch || hasMiniMonkey) && zinger.in}
        canGetBreak={day.out && (punch || hasMiniMonkey) && zinger.out}
      />
      <ForestCheck
        id={5311}
        name="Enemy in the Winch Room"
        region="Forest Area 1"
        canGetLogic={inStage && diddy && hasClimbing && canSlam && bat.in}
        canGetBreak={inStage && diddy && hasClimbing && canSlam && bat.out}
      />
      <ForestCheck
        id={5312}
        name="Enemy at Thornvine Barn Area Entrance"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5313}
        name="Thornvine Outside Enemy 0"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5314}
        name="Thornvine Outside Enemy 1"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5315}
        name="Thornvine Outside Enemy 2"
        region="Forest Area 1"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5316}
        name="Enemy Inside Thornvine Barn"
        region="Forest Area 1"
        canGetLogic={night.in && strong && canSlam && kosha.in}
        canGetBreak={night.out && dk && canSlam && kosha.out}
      />
    </DropPool>
  )
}

export default MillsEnemies
