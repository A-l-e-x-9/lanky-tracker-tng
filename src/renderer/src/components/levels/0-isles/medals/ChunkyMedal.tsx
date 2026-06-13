import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/isles/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { IslesMedalPool, HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.floor(cbCount / 2)

  return (
  <IslesMedalPool>
    <IslesCheck
      id={104}
      name="Chunky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <IslesCheck
      id={204}
      name="Chunky's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </IslesMedalPool>
  )
}

export default ChunkyMedal
