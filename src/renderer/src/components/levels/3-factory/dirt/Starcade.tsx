import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralDirt, useFactoryDirt, useFactoryHut } from '@renderer/hooks/factory'
import { useCoconut } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const canDoVanillaDirt = useFactoryDirt()
const canReachHut = useFactoryHut()
const hasCoconuts = useCoconut()
  return (
    <RainbowCoinPool>
      <FactoryCheck
        id={33001}
        name="Shuffled Dirt Patch: Vanilla Dirt (in Chunky's dark room)"
        region="Storage and Arcade Area"
        canGetLogic={canDoVanillaDirt.in}
        canGetBreak={canDoVanillaDirt.out}
      />
      <FactoryCheck
        id={33014}
        name="Shuffled Dirt Patch: Corner of the Storage Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33015}
        name="Shuffled Dirt Patch: In front of Cranky's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33016}
        name="Shuffled Dirt Patch: In front of Candy's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33017}
        name="Shuffled Dirt Patch: Corner of Chunky's dark room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={33018}
        name="Shuffled Dirt Patch: Bench in the arcade room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={33019}
        name="Shuffled Dirt Patch: Next to the arcade game"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={33042}
        name="Shuffled Dirt Patch: Vanilla Warp 1, in storage"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33049}
        name="Shuffled Dirt Patch: Vanilla Warp 5, in the arcade"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={33052}
        name="Shuffled Dirt Patch: Inside DK's power hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in && hasCoconuts && hasShockwave}
        canGetBreak={canReachHut.out && hasCoconuts && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const StarcadeDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default StarcadeDirt
