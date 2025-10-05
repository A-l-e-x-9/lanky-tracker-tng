import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/japes/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <JapesCheck
      id={1104}
      name="Chunky's Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <JapesCheck
      id={1204}
      name="Chunky's Half-Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default ChunkyMedal
