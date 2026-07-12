import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/caves/medals/tiny'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import CavesCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  const halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))

  return (
  <>
    <CavesCheck
      id={6103}
      name="Tiny's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <CavesCheck
      id={6203}
      name="Tiny's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </>
  )
}

export default TinyMedal
