import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/castle/medals/lanky'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import CastleCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  const halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))

  return (
  <>
    <CastleCheck
      id={7102}
      name="Lanky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <CastleCheck
      id={7202}
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
