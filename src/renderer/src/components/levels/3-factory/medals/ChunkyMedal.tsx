import {
  useChunkyMedalInLogic,
  useChunkyMedalOutLogic
} from '@renderer/hooks/factory/medals/chunky'
import { useCbCount, useHalfMedalPercent } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedalPercent = useHalfMedalPercent()
  const halfMedal = Math.floor(cbCount * (halfMedalPercent / 100))

  return (
  <>
    <FactoryCheck
      id={3104}
      name="Chunky's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <FactoryCheck
      id={3204}
      name="Chunky's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </>
  )
}

export default ChunkyMedal
