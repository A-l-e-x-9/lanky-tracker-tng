import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/castle/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import CastleCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.floor(cbCount / 2)

  return (
  <>
    <CastleCheck
      id={7104}
      name="Chunky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <CastleCheck
      id={7204}
      name="Chunky's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </>
  )
}

export default ChunkyMedal
