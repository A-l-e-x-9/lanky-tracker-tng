import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/caves/medals/diddy'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import CavesCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  const halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))

  return (
  <>
    <CavesCheck
      id={6101}
      name="Diddy's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <CavesCheck
      id={6201}
      name="Diddy's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </>
  )
}

export default DiddyMedal
