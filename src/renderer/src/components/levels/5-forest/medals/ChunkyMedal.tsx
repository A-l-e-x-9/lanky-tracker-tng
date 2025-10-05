import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/forest/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <ForestCheck
      id={5104}
      name="Chunky's Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <ForestCheck
      id={5204}
      name="Chunky's Half-Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default ChunkyMedal
