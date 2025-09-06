import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/aztec/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../check'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbcount / 2)

  return (
  <>
    <AztecCheck
      id={2100}
      name="Aztec DK Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <AztecCheck
      id={2200}
      name="Aztec DK Half-Medal"
      region="Aztec Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DkMedal
