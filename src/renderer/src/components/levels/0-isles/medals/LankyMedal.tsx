import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/isles/medals/lanky'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const LankyMedal: React.FC = (): JSX.Element => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  const halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))

  return (
  <>
    <IslesCheck
      id={102}
      name="Lanky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <IslesCheck
      id={202}
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
