import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/isles/medals/diddy'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import BananaMedalPool, { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DiddyMedal: React.FC = (): JSX.Element => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  let halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))
  if (halfMedal < 0) {
    halfMedal = 1
  }
  return (
  <>
    <BananaMedalPool>
    <IslesCheck
      id={101}
      name="Diddy's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    </BananaMedalPool>
    <HalfMedalPool>
    <IslesCheck
      id={201}
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
