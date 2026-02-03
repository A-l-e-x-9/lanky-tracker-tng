import Miniboss from '@renderer/components/pools/Miniboss'
import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/caves/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)
  return (
  <>
    <CavesCheck
      id={6102}
      name="Lanky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <CavesCheck
      id={6202}
      name="Lanky's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
    )
}

export default LankyMedal
