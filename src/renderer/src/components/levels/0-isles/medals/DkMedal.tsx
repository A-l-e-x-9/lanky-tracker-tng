import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/isles/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { IslesMedalPool, HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DkMedal: React.FC = (): JSX.Element => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.floor(cbCount / 2)

  return (
  <IslesMedalPool>
    <IslesCheck
      id={100}
      name="DK's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <IslesCheck
      id={200}
      name="DK's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </IslesMedalPool>
  )
}

export default DkMedal
