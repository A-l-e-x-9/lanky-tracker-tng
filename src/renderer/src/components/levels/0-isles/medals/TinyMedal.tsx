import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/isles/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
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
      name="Tiny's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <IslesCheck
      id={203}
      name="Tiny's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default TinyMedal
