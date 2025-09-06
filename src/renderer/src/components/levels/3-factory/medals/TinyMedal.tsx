import { useTinyMedalInLogic, useTinyMedalOutLogic } from '@renderer/hooks/aztec/medals/tiny'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../check'

const TinyMedal: React.FC = () => {
  const inLogic = useTinyMedalInLogic()
  const outLogic = useTinyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbcount / 2)

  return (
  <>
    <AztecCheck
      id={2103}
      name="Aztec Tiny Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <AztecCheck
      id={2203}
      name="Aztec Tiny Half-Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default TinyMedal
