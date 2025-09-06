import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/forest/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)
  return (
  <>
    <ForestCheck
      id={5102}
      name="Forest Lanky Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <ForestCheck
      id={5202}
      name="Forest Lanky Half-Medal"
      region="Forest Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default LankyMedal
