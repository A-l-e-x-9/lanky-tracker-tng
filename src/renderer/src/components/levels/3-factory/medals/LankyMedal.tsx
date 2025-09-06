import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/factory/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import FactoryCheck from '../check'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <FactoryCheck
      id={3102}
      name="Factory Lanky Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <FactoryCheck
      id={3202}
      name="Factory Lanky Half-Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default LankyMedal
