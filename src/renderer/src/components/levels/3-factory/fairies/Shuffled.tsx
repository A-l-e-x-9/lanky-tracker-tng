import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useFactoryProductionEnabled, useFactoryProductionTop, useDkProdGb } from '@renderer/hooks/factory'
import { useCamera, useClimbing } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'
import StartFairies from './Start'
import StarcadeFairies from './Starcade'
import TestingFairies from './Testing'
import RNDFairies from './RND'

const ShuffledFairies: React.FC = () => {
  const hasCam = useCamera()
  const hasClimbing = useClimbing()
  const isBreathing = useGeneralFairy()
  const prodRoomOn = useFactoryProductionEnabled()
  const prodRoomTop = useFactoryProductionTop()
  const crusher = useDkProdGb()
  return (
    <FairyPool>
      <StartFairies />
      <StarcadeFairies />
      <TestingFairies />
      <RNDFairies />
      <FactoryCheck
        id={43003}
        name="Shuffled Fairy: Down the pole to the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={43004}
        name="Shuffled Fairy: Bottom of Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={43005}
        name="Shuffled Fairy: Middle of Prod Room"
        region="Prod Room"
        canGetLogic={prodRoomOn.in && hasClimbing && hasCam}
        canGetBreak={prodRoomOn.out && hasCam}
      />
      <FactoryCheck
        id={43006}
        name="Shuffled Fairy: Top of Prod Room"
        region="Prod Room"
        canGetLogic={prodRoomTop.in && hasCam}
        canGetBreak={prodRoomTop.out && hasCam}
      />
      <FactoryCheck
        id={43019}
        name="Shuffled Fairy: In the Crusher"
        region="Prod Room"
        canGetLogic={crusher.in && hasCam}
        canGetBreak={crusher.out && hasCam}
      />
    </FairyPool>
  )
}

export default ShuffledFairies
