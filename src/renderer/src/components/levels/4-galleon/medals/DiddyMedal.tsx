import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/galleon/medals/diddy'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import GalleonCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  const halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))

  return (
  <>
    <GalleonCheck
      id={4101}
      name="Diddy's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <GalleonCheck
      id={4201}
      name="Diddy's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </>
  )
}

export default DiddyMedal
