import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/castle/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import CastleCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <CastleCheck
      id={7104}
      name="Chunky's Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <CastleCheck
      id={7204}
      name="Chunky's Half-Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default ChunkyMedal
