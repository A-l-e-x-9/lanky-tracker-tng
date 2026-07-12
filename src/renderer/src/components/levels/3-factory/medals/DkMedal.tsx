import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/factory/medals/dk'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  const halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))

  return (
  <>
    <FactoryCheck
      id={3100}
      name="DK's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <FactoryCheck
      id={3200}
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
