import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/caves/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import CavesCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.floor(cbCount / 2)
  return (
  <>
    <CavesCheck
      id={6102}
      name="Lanky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <CavesCheck
      id={6202}
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
