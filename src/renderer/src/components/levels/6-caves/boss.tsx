import BossPool from '@renderer/components/pools/Bosses'
import { usePlayCaves, useCavesTroffAndScoff } from '@renderer/hooks/caves'
import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/caves/medals/dk'
import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/caves/medals/diddy'
import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/caves/medals/lanky'
import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/caves/medals/tiny'
import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/caves/medals/chunky'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useAngryCaves } from '@renderer/hooks/settings'
import CavesCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayCaves()
  const anyKong = useAnyKong()
  const angery = useAngryCaves()
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
  const troffAndScoff = useCavesTroffAndScoff()
  return (
    <BossPool>
      <CavesCheck
        id={6105}
        name="Caves Boss"
        region="Bosses"
        canGetLogic={inStage.in && !angery && anyKong && (currentCBCountIn >= troffAndScoff)}
        canGetBreak={(inStage.out || angery) && anyKong && (currentCBCountOut >= troffAndScoff)}
      />
    </BossPool>
  )
}

export default BossCheck
