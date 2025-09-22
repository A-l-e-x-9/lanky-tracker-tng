import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/src/hooks/factory/medals/tiny'
import { useCbCount } from '@renderer/src/hooks/settings'
import FactoryCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <FactoryCheck
      id={3103}
      name="Factory Tiny Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <FactoryCheck
      id={3203}
      name="Factory Tiny Half-Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default TinyMedal
