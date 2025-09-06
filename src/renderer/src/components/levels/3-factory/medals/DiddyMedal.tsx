import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/aztec/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../check'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbcount / 2)

  return (
  <>
    <AztecCheck
      id={2101}
      name="Aztec Diddy Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <AztecCheck
      id={2201}
      name="Aztec Diddy Half-Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DiddyMedal
