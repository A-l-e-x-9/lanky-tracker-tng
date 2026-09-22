import BossPool from '@renderer/components/pools/Bosses'
import { usePlayForest, useForestTroffAndScoff } from '@renderer/hooks/forest'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/forest/medals/dk'
import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/forest/medals/diddy'
import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/forest/medals/lanky'
import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/forest/medals/tiny'
import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/forest/medals/chunky'
import ForestCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayForest()
  const anyKong = useAnyKong()
  const DKCurrentCBsIn = useDkMedalInLogic()
  const DKCurrentCBsOut = useDkMedalOutLogic()
  const diddyCurrentCBsIn = useDiddyMedalInLogic()
  const diddyCurrentCBsOut = useDiddyMedalOutLogic()
  const lankyCurrentCBsIn = useLankyMedalInLogic()
  const lankyCurrentCBsOut = useLankyMedalOutLogic()
  const tinyCurrentCBsIn = useTinyMedalInLogic()
  const tinyCurrentCBsOut = useTinyMedalOutLogic()
  const chunkyCurrentCBsIn = useChunkyMedalInLogic()
  const chunkyCurrentCBsOut = useChunkyMedalOutLogic()
  const currentCBCountIn = DKCurrentCBsIn + diddyCurrentCBsIn + lankyCurrentCBsIn + tinyCurrentCBsIn + chunkyCurrentCBsIn
  const currentCBCountOut = DKCurrentCBsOut + diddyCurrentCBsOut + lankyCurrentCBsOut + tinyCurrentCBsOut + chunkyCurrentCBsOut
  const troffAndScoff = useForestTroffAndScoff()
  return (
    <BossPool>
      <ForestCheck
        id={5105}
        name="Forest Boss"
        region="Bosses"
        canGetLogic={inStage.in && anyKong && (currentCBCountIn >= troffAndScoff)}
        canGetBreak={inStage.out && anyKong && (currentCBCountOut >= troffAndScoff)}
      />
    </BossPool>
  )
}

export default BossCheck
