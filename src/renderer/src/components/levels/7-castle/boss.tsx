import BossPool from '@renderer/components/pools/Bosses'
import { usePlayCastle, useCastleTroffAndScoff } from '@renderer/hooks/castle'
import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/castle/medals/dk'
import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/castle/medals/diddy'
import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/castle/medals/lanky'
import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/castle/medals/tiny'
import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/castle/medals/chunky'
import { useAnyKong } from '@renderer/hooks/kongs'
import CastleCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayCastle()
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
  const troffAndScoff = useCastleTroffAndScoff()
  return (
    <BossPool>
      <CastleCheck
        id={7105}
        name="Castle Boss"
        region="Bosses"
        canGetLogic={inStage.in && anyKong && (currentCBCountIn >= troffAndScoff)}
        canGetBreak={inStage.out && anyKong && (currentCBCountOut >= troffAndScoff)}
      />
    </BossPool>
  )
}

export default BossCheck
