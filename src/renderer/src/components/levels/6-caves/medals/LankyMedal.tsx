import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/caves/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <CavesCheck
      id={6102}
      name="Caves Lanky Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <CavesCheck
      id={6202}
      name="Caves Lanky Half-Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default LankyMedal
