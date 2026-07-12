import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/castle/medals/dk'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import CastleCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  const halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))

  return (
  <>
    <CastleCheck
      id={7100}
      name="DK's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <CastleCheck
      id={7200}
      name="DK's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </>
  )
}

export default DkMedal
