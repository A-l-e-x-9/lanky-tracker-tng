import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/forest/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.floor(cbCount / 2)

  return (
  <>
    <ForestCheck
      id={5100}
      name="DK's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <ForestCheck
      id={5200}
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
