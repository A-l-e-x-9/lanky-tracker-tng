import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/src/hooks/isles/medals/diddy'
import { useCbCount } from '@renderer/src/hooks/settings'
import IslesCheck from '../check'

const DiddyMedal: React.FC = (): JSX.Element => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <IslesCheck
      id={101}
      name="Isles Diddy Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <IslesCheck
      id={201}
      name="Isles Diddy Half-Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DiddyMedal
