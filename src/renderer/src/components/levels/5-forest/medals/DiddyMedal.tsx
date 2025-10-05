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
      name="Diddy's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <ForestCheck
      id={5201}
      name="Diddy's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DiddyMedal
