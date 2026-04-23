import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralFairy } from '@renderer/hooks/factory'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  return (
    <FairyPool>
      <FactoryCheck
        id={43007}
        name="Shuffled Fairy: In Storage"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={43008}
        name="Shuffled Fairy: At Cranky's/Candy's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={43009}
        name="Shuffled Fairy: In the tunnel to the Arcade room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasBananaports)}
      />
      <FactoryCheck
        id={43010}
        name="Shuffled Fairy: Suffering through DK Arcade"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasBananaports)}
      />
      <FactoryCheck
        id={43018}
        name="Shuffled Fairy: In Chunky's Dark Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
    </FairyPool>
  )
}

const StarcadeFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default StarcadeFairies
