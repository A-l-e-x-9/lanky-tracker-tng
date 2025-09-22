import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/src/hooks/castle/medals/dk'
import { useCbCount } from '@renderer/src/hooks/settings'
import CastleCheck from '../check'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <CastleCheck
      id={7100}
      name="Castle DK Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <CastleCheck
      id={7200}
      name="Castle DK Half-Medal"
      region="Castle Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DkMedal
