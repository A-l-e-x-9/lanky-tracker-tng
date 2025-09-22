import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/src/hooks/galleon/medals/lanky'
import { useCbCount } from '@renderer/src/hooks/settings'
import GalleonCheck from '../check'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <GalleonCheck
      id={4102}
      name="Galleon Lanky Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <GalleonCheck
      id={4202}
      name="Galleon Lanky Half-Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default LankyMedal
