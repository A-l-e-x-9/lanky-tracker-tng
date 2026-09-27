import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/aztec/medals/diddy'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import BananaMedalPool, { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  let halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))
  if (halfMedal < 1) {
    halfMedal = 1
  }
  return (
  <>
    <BananaMedalPool>
    <AztecCheck
      id={2101}
      name="Diddy's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    </BananaMedalPool>
    <HalfMedalPool>
    <AztecCheck
      id={2201}
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
