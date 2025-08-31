import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/isles/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import IslesCheck from '../check'

const DiddyMedal: React.FC = (): JSX.Element => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <IslesCheck
      id={101}
      name="Isles Diddy Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DiddyMedal
