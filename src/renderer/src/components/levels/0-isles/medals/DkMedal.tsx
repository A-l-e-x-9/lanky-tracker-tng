import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/src/hooks/isles/medals/dk'
import { useCbCount } from '@renderer/src/hooks/settings'
import IslesCheck from '../check'

/**
 * The logic of DK's Medal in Japes, wrapped neatly in this component.
 * @returns the check for DK's Medal in Japes.
 */
const DkMedal: React.FC = (): JSX.Element => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <IslesCheck
      id={100}
      name="Isles DK Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <IslesCheck
      id={200}
      name="Isles DK Half-Medal"
      region="Isles Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DkMedal
