import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/forest/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <ForestCheck
      id={5103}
      name="Tiny's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <ForestCheck
      id={5203}
      name="Tiny's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default TinyMedal
