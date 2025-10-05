import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/castle/medals/lanky'
import { useCbCount } from '@renderer/hooks/settings'
import CastleCheck from '../check'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <CastleCheck
      id={7102}
      name="Lanky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <CastleCheck
      id={7202}
      name="Lanky's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default LankyMedal
