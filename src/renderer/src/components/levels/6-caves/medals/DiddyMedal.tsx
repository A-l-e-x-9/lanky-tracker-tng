import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/src/hooks/caves/medals/diddy'
import { useCbCount } from '@renderer/src/hooks/settings'
import CavesCheck from '../check'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <CavesCheck
      id={6101}
      name="Caves Diddy Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <CavesCheck
      id={6201}
      name="Caves Diddy Half-Medal"
      region="Caves Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default DiddyMedal
