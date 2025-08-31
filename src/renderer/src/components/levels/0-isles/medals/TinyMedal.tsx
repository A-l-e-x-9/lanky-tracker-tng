import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/isles/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import IslesCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <IslesCheck
      id={103}
      name="Isles Tiny Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default TinyMedal
