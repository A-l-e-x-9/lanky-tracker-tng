import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/isles/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import IslesCheck from '../check'

const LankyMedal: React.FC = (): JSX.Element => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <IslesCheck
      id={102}
      name="Isles Lanky Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default LankyMedal
