import BossPool from '@renderer/components/pools/Bosses'
import { useAztecFront, useAztecTroffAndScoff } from '@renderer/hooks/aztec'
import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/aztec/medals/dk'
import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/aztec/medals/diddy'
import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/aztec/medals/lanky'
import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/aztec/medals/tiny'
import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/aztec/medals/chunky'
import { useAnyKong } from '@renderer/hooks/kongs'
import AztecCheck from './check'

const BossCheck: React.FC = () => {
  const aztecFront = useAztecFront()
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
  const troffAndScoff = useAztecTroffAndScoff()
  return (
    <BossPool>
      <AztecCheck
        id={2105}
        name="Aztec Boss"
        region="Bosses"
        canGetLogic={aztecFront.in && anyKong && (currentCBCountIn >= troffAndScoff)}
        canGetBreak={aztecFront.out && anyKong && (currentCBCountOut >= troffAndScoff)}
      />
    </BossPool>
  )
}

export default BossCheck
