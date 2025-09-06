import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/japes/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const DiddyMedal: React.FC = (): JSX.Element => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <JapesCheck
      id={1101}
      name="Japes Diddy Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <JapesCheck
      id={1201}
      name="Japes Diddy Half-Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DiddyMedal
