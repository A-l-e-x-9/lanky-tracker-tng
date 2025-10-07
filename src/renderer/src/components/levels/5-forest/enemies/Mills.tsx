import DropPool from '@renderer/components/pools/Drops'
import {
  useDefeatBat,
  useDefeatKlump,
  useDefeatKosha,
  useDefeatZinger
} from '@renderer/hooks/enemies'
import { useForestDay, useForestNight, usePlayForest, useSlamForest } from '@renderer/hooks/forest'
import { useAnyKong, useDiddy, useDk, usePunch, useStrong, useMini, useCamera } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
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
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <ForestCheck
        id={5330}
        name="Enemy Near Snide's"
        region="Forest Area 1"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5331}
        name="Enemy Near the Infamous Dirt Patch"
        region="Forest Area 1"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5333}
        name="Enemy Near the Dark Attic"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5334}
        name="Enemy Near the Well Exit"
        region="Forest Area 1"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5335}
        name="Enemy Near the Blue Tunnel"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5346}
        name="Enemy in the Front Mill"
        region="Forest Area 1"
        canGetLogic={day.in && zinger.in}
        canGetBreak={logicBreak(day) && zinger.out}
      />
      <ForestCheck
        id={5347}
        name="Enemy in the Back Mill"
        region="Forest Area 1"
        canGetLogic={day.in && (punch || hasMiniMonkey) && zinger.in}
        canGetBreak={logicBreak(day) && (punch || hasMiniMonkey) && zinger.out}
      />
      <ForestCheck
        id={5344}
        name="Enemy in the Winch Room"
        region="Forest Area 1"
        canGetLogic={inStage && diddy && canSlam && bat.in}
        canGetBreak={inStage && diddy && canSlam && bat.out}
      />
      <ForestCheck
        id={5339}
        name="Enemy at Thornvine Barn Area Entrance"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5336}
        name="Thornvine Outside Enemy 0"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5337}
        name="Thornvine Outside Enemy 1"
        region="Forest Area 1"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5338}
        name="Thornvine Outside Enemy 2"
        region="Forest Area 1"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5345}
        name="Enemy Inside Thornvine Barn"
        region="Forest Area 1"
        canGetLogic={night.in && strong && canSlam && kosha.in}
        canGetBreak={logicBreak(night) && dk && canSlam && kosha.out}
      />
      <ForestCheck
        id={5430}
        name="Photo of Enemy Near Snide's"
        region="Forest Area 1"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5431}
        name="Photo of Enemy Near the Infamous Dirt Patch"
        region="Forest Area 1"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5433}
        name="Photo of Enemy Near the Dark Attic"
        region="Forest Area 1"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5434}
        name="Photo of Enemy Near the Well Exit"
        region="Forest Area 1"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5435}
        name="Photo of Enemy Near the Blue Tunnel"
        region="Forest Area 1"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5446}
        name="Photo of Enemy in the Front Mill"
        region="Forest Area 1"
        canGetLogic={day.in && hasFairyCam}
        canGetBreak={logicBreak(day) && hasFairyCam}
      />
      <ForestCheck
        id={5447}
        name="Photo of Enemy in the Back Mill"
        region="Forest Area 1"
        canGetLogic={day.in && (punch || hasMiniMonkey) && hasFairyCam}
        canGetBreak={logicBreak(day) && (punch || hasMiniMonkey) && hasFairyCam}
      />
      <ForestCheck
        id={5444}
        name="Photo of Enemy in the Winch Room"
        region="Forest Area 1"
        canGetLogic={inStage && diddy && canSlam && hasFairyCam}
      />
      <ForestCheck
        id={5439}
        name="Photo of Enemy at Thornvine Barn Area Entrance"
        region="Forest Area 1"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5436}
        name="Photo of Thornvine Outside Enemy 0"
        region="Forest Area 1"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5437}
        name="Photo of Thornvine Outside Enemy 1"
        region="Forest Area 1"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5438}
        name="Photo of Thornvine Outside Enemy 2"
        region="Forest Area 1"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5445}
        name="Photo of Enemy Inside Thornvine Barn"
        region="Forest Area 1"
        canGetLogic={night.in && strong && canSlam && kosha.in && hasFairyCam}
        canGetBreak={logicBreak(night) && dk && canSlam && kosha.out && hasFairyCam}
      />
    </DropPool>
  )
}

export default MillsEnemies
