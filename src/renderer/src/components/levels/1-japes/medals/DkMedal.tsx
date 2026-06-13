import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/japes/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

/**
 * The logic of DK's Medal in Japes, wrapped neatly in this component.
 * @returns the check for DK's Medal in Japes.
 */
const DkMedal: React.FC = (): JSX.Element => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.floor(cbCount / 2)

  return (
  <>
    <JapesCheck
      id={1100}
      name="DK's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <JapesCheck
      id={1200}
      name="DK's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </>
  )
}

export default DkMedal
