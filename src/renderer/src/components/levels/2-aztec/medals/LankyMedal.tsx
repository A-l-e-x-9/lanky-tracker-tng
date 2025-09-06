import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/aztec/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../check'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <AztecCheck
      id={2102}
      name="Aztec Lanky Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <AztecCheck
      id={2202}
      name="Aztec Lanky Half-Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default LankyMedal
