import BossPool from '@renderer/components/pools/Bosses'
import { useJapesRambi, useJapesSideArea, usePlayJapes, useJapesTroffAndScoff } from '@renderer/hooks/japes'
import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/japes/medals/dk'
import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/japes/medals/diddy'
import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/japes/medals/lanky'
import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/japes/medals/tiny'
import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/japes/medals/chunky'
import { useAnyKong, useClimbing, useVine } from '@renderer/hooks/kongs'
import JapesCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayJapes()
  const anyKong = useAnyKong()
  const vine = useVine()
  const climbing = useClimbing()
  const japesRambi = useJapesRambi()
  const japesSide = useJapesSideArea()
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
  const troffAndScoff = useJapesTroffAndScoff()
  return (
    <BossPool>
      <JapesCheck
        id={1105}
        name="Japes Boss"
        region="Bosses"
        canGetLogic={inStage.in && anyKong && ((vine && climbing) || japesSide.in || japesRambi.in) && (currentCBCountIn >= troffAndScoff)}
        canGetBreak={inStage.out && anyKong && (currentCBCountOut >= troffAndScoff)}
      />
    </BossPool>
  )
}

export default BossCheck
