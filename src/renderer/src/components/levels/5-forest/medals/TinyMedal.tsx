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
      name="Forest Tiny Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <ForestCheck
      id={5203}
      name="Forest Tiny Half-Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default TinyMedal
