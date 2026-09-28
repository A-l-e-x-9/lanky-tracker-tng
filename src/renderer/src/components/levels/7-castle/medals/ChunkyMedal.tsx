import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from '@renderer/hooks/castle/medals/chunky'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import CastleCheck from '../check'
import BananaMedalPool, { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  let halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))
  if (halfMedal < 1) {
    halfMedal = 1
  }
  return (
  <>
    <BananaMedalPool>
    <CastleCheck
      id={7104}
      name="Chunky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    </BananaMedalPool>
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
