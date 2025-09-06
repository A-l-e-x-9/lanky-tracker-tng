import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/aztec/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <AztecCheck
      id={2104}
      name="Aztec Chunky Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <AztecCheck
      id={2204}
      name="Aztec Chunky Half-Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default ChunkyMedal
