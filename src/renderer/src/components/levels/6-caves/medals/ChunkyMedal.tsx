import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/caves/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <CavesCheck
      id={6104}
      name="Caves Chunky Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <CavesCheck
      id={6204}
      name="Caves Chunky Half-Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default ChunkyMedal
