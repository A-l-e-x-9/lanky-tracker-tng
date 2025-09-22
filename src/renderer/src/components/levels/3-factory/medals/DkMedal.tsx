import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/src/hooks/factory/medals/dk'
import { useCbCount } from '@renderer/src/hooks/settings'
import FactoryCheck from '../check'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <FactoryCheck
      id={3100}
      name="Factory DK Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <FactoryCheck
      id={3200}
      name="Factory DK Half-Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DkMedal
