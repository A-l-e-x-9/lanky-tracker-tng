import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/src/hooks/isles/medals/tiny'
import { useCbCount } from '@renderer/src/hooks/settings'
import IslesCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <IslesCheck
      id={103}
      name="Isles Tiny Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <IslesCheck
      id={203}
      name="Isles Tiny Half-Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default TinyMedal
