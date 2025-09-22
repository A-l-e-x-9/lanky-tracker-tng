import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/forest/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <ForestCheck
      id={5101}
      name="Forest Diddy Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <ForestCheck
      id={5201}
      name="Forest Diddy Half-Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DiddyMedal
