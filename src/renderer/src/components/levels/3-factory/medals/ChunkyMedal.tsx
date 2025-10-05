import {
  useChunkyMedalInLogic,
  useChunkyMedalOutLogic
} from '@renderer/hooks/factory/medals/chunky'
import { useCbCount } from '@renderer/hooks/settings'
import FactoryCheck from '../check'

const ChunkyMedal: React.FC = () => {
  const inLogic = useChunkyMedalInLogic()
  const outLogic = useChunkyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.round(cbCount / 2)

  return (
  <>
    <FactoryCheck
      id={3104}
      name="Chunky's Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <FactoryCheck
      id={3204}
      name="Chunky's Half-Medal"
      region="Factory Medal Rewards"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
  </>
  )
}

export default ChunkyMedal
