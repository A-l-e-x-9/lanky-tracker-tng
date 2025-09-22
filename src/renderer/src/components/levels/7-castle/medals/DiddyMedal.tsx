import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/src/hooks/castle/medals/diddy'
import { useCbCount } from '@renderer/src/hooks/settings'
import CastleCheck from '../check'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <CastleCheck
      id={7101}
      name="Castle Diddy Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <CastleCheck
      id={7201}
      name="Castle Diddy Half-Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DiddyMedal
