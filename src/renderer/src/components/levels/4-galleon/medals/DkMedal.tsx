import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/galleon/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <GalleonCheck
      id={4100}
      name="DK's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <GalleonCheck
      id={4200}
      name="DK's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DkMedal
