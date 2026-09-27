import { useLankyMedalInLogic, useLankyMedalOutLogic } from '@renderer/hooks/forest/medals/lanky'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import ForestCheck from '../check'
import BananaMedalPool, { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const LankyMedal: React.FC = () => {
  const inLogic = useLankyMedalInLogic()
  const outLogic = useLankyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  let halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))
  if (halfMedal < 1) {
    halfMedal = 1
  }
  return (
  <>
    <BananaMedalPool>
    <ForestCheck
      id={5102}
      name="Lanky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    </BananaMedalPool>
    <HalfMedalPool>
    <ForestCheck
      id={5202}
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
