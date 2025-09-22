import DropPool from '@renderer/src/components/pools/Drops'
import {
  useDefeatBat,
  useDefeatKlump,
  useDefeatKosha,
  useDefeatZinger
} from '@renderer/src/hooks/enemies'
import { useForestDay, useForestNight, usePlayForest, useSlamForest } from '@renderer/src/hooks/forest'
import { useAnyKong, useDiddy, useDk, usePunch, useStrong, useMini, useCamera } from '@renderer/src/hooks/kongs'
import { logicBreak } from '@renderer/src/hooks/world'
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
        name="Forest Enemy: Near Snide"
        region="Forest Mills"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5331}
        name="Forest Enemy: Near the Infamous Dirt Patch"
        region="Forest Mills"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5333}
        name="Forest Enemy: Near Dark Attic"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5334}
        name="Forest Enemy: Near Well Exit"
        region="Forest Mills"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5335}
        name="Forest Enemy: Near Blue Tunnel"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5346}
        name="Forest Enemy: Mill Inside Front"
        region="Forest Mills"
        canGetLogic={day.in && zinger.in}
        canGetBreak={logicBreak(day) && zinger.out}
      />
      <ForestCheck
        id={5347}
        name="Forest Enemy: Mill Inside Rear"
        region="Forest Mills"
        canGetLogic={day.in && (punch || hasMiniMonkey) && zinger.in}
        canGetBreak={logicBreak(day) && (punch || hasMiniMonkey) && zinger.out}
      />
      <ForestCheck
        id={5344}
        name="Forest Enemy: Winch Inside"
        region="Forest Mills"
        canGetLogic={inStage && diddy && canSlam && bat.in}
        canGetBreak={inStage && diddy && canSlam && bat.out}
      />
      <ForestCheck
        id={5336}
        name="Forest Enemy: Thornvine 0"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5337}
        name="Forest Enemy: Thornvine 1"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5338}
        name="Forest Enemy: Thornvine 2"
        region="Forest Mills"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5339}
        name="Forest Enemy: Thornvine Entrance"
        region="Forest Mills"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5345}
        name="Forest Enemy: Thornvine Barn Inside"
        region="Forest Mills"
        canGetLogic={night.in && strong && canSlam && kosha.in}
        canGetBreak={logicBreak(night) && dk && canSlam && kosha.out}
      />
      <ForestCheck
        id={5430}
        name="Forest Enemy Photo: Near Snide"
        region="Forest Mills"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5431}
        name="Forest Enemy Photo: Near the Infamous Dirt Patch"
        region="Forest Mills"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5433}
        name="Forest Enemy Photo: Near Dark Attic"
        region="Forest Mills"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5434}
        name="Forest Enemy Photo: Near Well Exit"
        region="Forest Mills"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5435}
        name="Forest Enemy Photo: Near Blue Tunnel"
        region="Forest Mills"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5446}
        name="Forest Enemy Photo: Mill Inside Front"
        region="Forest Mills"
        canGetLogic={day.in && hasFairyCam}
        canGetBreak={logicBreak(day) && hasFairyCam}
      />
      <ForestCheck
        id={5447}
        name="Forest Enemy Photo: Mill Inside Rear"
        region="Forest Mills"
        canGetLogic={day.in && (punch || hasMiniMonkey) && hasFairyCam}
        canGetBreak={logicBreak(day) && (punch || hasMiniMonkey) && hasFairyCam}
      />
      <ForestCheck
        id={5444}
        name="Forest Enemy Photo: Winch Inside"
        region="Forest Mills"
        canGetLogic={inStage && diddy && canSlam && hasFairyCam}
      />
      <ForestCheck
        id={5436}
        name="Forest Enemy Photo: Thornvine 0"
        region="Forest Mills"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5437}
        name="Forest Enemy Photo: Thornvine 1"
        region="Forest Mills"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5438}
        name="Forest Enemy Photo: Thornvine 2"
        region="Forest Mills"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5439}
        name="Forest Enemy Photo: Thornvine Entrance"
        region="Forest Mills"
        canGetLogic={inStage && klump && hasFairyCam}
      />
      <ForestCheck
        id={5445}
        name="Forest Enemy Photo: Thornvine Barn Inside"
        region="Forest Mills"
        canGetLogic={night.in && strong && canSlam && kosha.in && hasFairyCam}
        canGetBreak={logicBreak(night) && dk && canSlam && kosha.out && hasFairyCam}
      />
    </DropPool>
  )
}

export default MillsEnemies
