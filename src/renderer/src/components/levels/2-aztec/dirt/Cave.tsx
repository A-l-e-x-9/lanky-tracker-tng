import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt, useBananaportAll } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useGeneralDirt, useCoconutKasplat, useAztecBack, useDkTunnelGb } from '@renderer/hooks/aztec'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
const canReachDKKasplat = useCoconutKasplat()
const canReachArea2 = useAztecBack()
const canReachQSTunnel = useDkTunnelGb()
const [didGB] = useDonkStore(useShallow((state) => [state.checks]))
const hasAllBananaports = useBananaportAll()
  return (
    <RainbowCoinPool>
      <AztecCheck
        id={32008}
        name="Shuffled Dirt Patch: In front of DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32009}
        name="Shuffled Dirt Patch: In DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={canReachDKKasplat.in && hasShockwave}
        canGetBreak={canReachDKKasplat.out && hasShockwave}
      />
      <AztecCheck
        id={32017}
        name="Shuffled Dirt Patch: Near Chunky's barrel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32018}
        name="Shuffled Dirt Patch: Left of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32019}
        name="Shuffled Dirt Patch: Right of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32020}
        name="Shuffled Dirt Patch: Behind the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32035}
        name="Shuffled Dirt Patch: Inside DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={canReachQSTunnel.in && hasShockwave}
        canGetBreak={canReachQSTunnel.out && hasShockwave}
      />
      <AztecCheck
        id={32036}
        name="Shuffled Dirt Patch: Vanilla Warp 1, level start"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={32039}
        name="Shuffled Dirt Patch: Vanilla Warp 2, end of the middle tunnel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32040}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in && hasShockwave}
        canGetBreak={canReachArea2.out && hasShockwave}
      />
      <AztecCheck
        id={32045}
        name="Shuffled Dirt Patch: Vanilla Warp 5, at DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={(didGB[2002] || hasAllBananaports) && isBreathing.in}
        canGetBreak={(didGB[2002] || hasAllBananaports) && isBreathing.out}
      />
    </RainbowCoinPool>
  )
}

const CaveDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default CaveDirt
