import BossPool from '@renderer/components/pools/Bosses'
import {
  useGalleonCavernTop,
  useGalleonLighthouseArea,
  useGalleonOutskirts, useGalleonTroffAndScoff
} from '@renderer/hooks/galleon'
import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/galleon/medals/dk'
import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/galleon/medals/diddy'
import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/galleon/medals/lanky'
import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/galleon/medals/tiny'
import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/galleon/medals/chunky'
import { useDive } from '@renderer/hooks/kongs'
import GalleonCheck from './check'

const BossCheck: React.FC = () => {
  const lighthouseArea = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const top = useGalleonCavernTop()
  const dive = useDive()
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
  const troffAndScoff = useGalleonTroffAndScoff()
  return (
    <BossPool>
      <GalleonCheck
        id={4105}
        name="Galleon Boss"
        region="Bosses"
        canGetLogic={(currentCBCountIn >= troffAndScoff) && (top.in || (dive.in && (lighthouseArea.in || outskirts.in)))}
        canGetBreak={(currentCBCountOut >= troffAndScoff) && top.out}
      />
    </BossPool>
  )
}

export default BossCheck
