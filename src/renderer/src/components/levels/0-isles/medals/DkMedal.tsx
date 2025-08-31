import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/isles/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import IslesCheck from '../check'

/**
 * The logic of DK's Medal in Japes, wrapped neatly in this component.
 * @returns the check for DK's Medal in Japes.
 */
const DkMedal: React.FC = (): JSX.Element => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()

  return (
    <IslesCheck
      id={100}
      name="Isles DK Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
  )
}

export default DkMedal
