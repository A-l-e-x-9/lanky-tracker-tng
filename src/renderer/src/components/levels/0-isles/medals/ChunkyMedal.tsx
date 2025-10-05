import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/isles/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import IslesCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <IslesCheck
      id={104}
      name="Chunky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <IslesCheck
      id={204}
      name="Chunky's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default ChunkyMedal
