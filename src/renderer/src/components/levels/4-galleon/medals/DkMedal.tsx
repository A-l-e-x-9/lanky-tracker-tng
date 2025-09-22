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
      name="Galleon DK Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <GalleonCheck
      id={4200}
      name="Galleon DK Half-Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DkMedal
