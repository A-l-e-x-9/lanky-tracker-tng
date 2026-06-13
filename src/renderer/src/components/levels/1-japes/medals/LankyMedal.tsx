import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/japes/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const LankyMedal: React.FC = (): JSX.Element => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.floor(cbCount / 2)

  return (
  <>
    <JapesCheck
      id={1102}
      name="Lanky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <JapesCheck
      id={1202}
      name="Lanky's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </>
  )
}

export default LankyMedal
