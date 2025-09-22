import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/src/hooks/factory/medals/diddy'
import { useCbCount } from '@renderer/src/hooks/settings'
import FactoryCheck from '../check'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <FactoryCheck
      id={3101}
      name="Factory Diddy Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <FactoryCheck
      id={3201}
      name="Factory Diddy Half-Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DiddyMedal
