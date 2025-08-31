import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/isles/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import IslesCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <IslesCheck
      id={104}
      name="Isles Chunky Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default ChunkyMedal
