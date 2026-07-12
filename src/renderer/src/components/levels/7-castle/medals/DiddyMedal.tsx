import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from '@renderer/hooks/castle/medals/diddy'
import { useCbCount } from '@renderer/hooks/settings'
import CastleCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DiddyMedal: React.FC = () => {
  const inLogic = useDiddyMedalInLogic()
  const outLogic = useDiddyMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.floor(cbCount / 2)

  return (
  <>
    <CastleCheck
      id={7101}
      name="Diddy's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <CastleCheck
      id={7201}
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
