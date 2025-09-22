import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/src/hooks/japes/medals/tiny'
import { useCbCount } from '@renderer/src/hooks/settings'
import JapesCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <JapesCheck
      id={1103}
      name="Japes Tiny Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <JapesCheck
      id={1203}
      name="Japes Tiny Half-Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default TinyMedal
