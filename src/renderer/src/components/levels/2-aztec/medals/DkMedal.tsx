import { useDkMedalInLogic, useDkMedalOutLogic } from '@renderer/hooks/aztec/medals/dk'
import { useCbCount } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { HalfMedalPool } from '@renderer/components/pools/BananaMedals'

const DkMedal: React.FC = () => {
  const inLogic = useDkMedalInLogic()
  const outLogic = useDkMedalOutLogic()
  const cbCount = useCbCount()
  const halfMedal = Math.floor(cbCount / 2)

  return (
  <>
    <AztecCheck
      id={2100}
      name="DK's Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= cbCount}
      canGetBreak={outLogic >= cbCount}
    />
    <HalfMedalPool>
    <AztecCheck
      id={2200}
      name="DK's Half-Medal"
      region="Banana Medals"
      canGetLogic={inLogic >= halfMedal}
      canGetBreak={outLogic >= halfMedal}
    />
    </HalfMedalPool>
  </>
  )
}

export default DkMedal
