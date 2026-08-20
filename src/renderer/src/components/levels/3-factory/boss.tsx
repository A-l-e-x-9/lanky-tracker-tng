import BossPool from '@renderer/components/pools/Bosses'
import { usePlayFactory, useFactoryTroffAndScoff } from '@renderer/hooks/factory'
import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/factory/medals/dk'
import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/factory/medals/diddy'
import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/factory/medals/lanky'
import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/factory/medals/tiny'
import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/factory/medals/chunky'
import { useAnyKong } from '@renderer/hooks/kongs'
import FactoryCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayFactory()
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
  const troffAndScoff = useFactoryTroffAndScoff()
  return (
    <BossPool>
      <FactoryCheck
        id={3105}
        name="Factory Boss"
        region="Bosses"
        canGetLogic={inStage.in && anyKong && (currentCBCountIn >= troffAndScoff)}
        canGetBreak={inStage.out && anyKong && (currentCBCountOut >= troffAndScoff)}
      />
    </BossPool>
  )
}

export default BossCheck
