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
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <IslesCheck
      id={100}
      name="DK's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <IslesCheck
      id={200}
      name="DK's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DkMedal
