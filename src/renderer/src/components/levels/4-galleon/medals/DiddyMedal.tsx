import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/galleon/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <GalleonCheck
      id={4101}
      name="Galleon Diddy Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <GalleonCheck
      id={4201}
      name="Galleon Diddy Half-Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DiddyMedal
