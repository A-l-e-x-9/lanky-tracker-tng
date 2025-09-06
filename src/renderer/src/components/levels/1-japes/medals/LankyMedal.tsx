import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/japes/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const LankyMedal: React.FC = (): JSX.Element => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <JapesCheck
      id={1102}
      name="Japes Lanky Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <JapesCheck
      id={1202}
      name="Japes Lanky Half-Medal"
      region="Japes Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default LankyMedal
