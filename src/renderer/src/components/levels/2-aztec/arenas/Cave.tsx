import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useGeneralThing, useCoconutKasplat, useAztecBack } from '@renderer/hooks/japes'
import {  } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachDKKasplat = useCoconutKasplat()
const canReachArea2 = useAztecBack()
  return (
    <ArenaPool>
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: In front of DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: In DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={canReachDKKasplat.in}
        canGetBreak={canReachDKKasplat.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Near Chunky's barrel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Left of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Right of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Behind the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Inside DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={canReachQSTunnel.in}
        canGetBreak={canReachQSTunnel.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 1, level start"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 2, end of the middle tunnel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 3, at Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={12000}
        name="Shuffled Battle Arena: Vanilla Warp 5, at DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={isBreathing.in && (didGB[2002] || hasAllBananaports)}
        canGetBreak={isBreathing.out && (didGB[2002] || hasAllBananaports)}
      />
    </ArenaPool>
  )
}

const CaveArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default CaveArenas
