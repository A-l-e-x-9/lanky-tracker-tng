import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import {  } from '@renderer/hooks/aztec'
import {  } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  return (
    <CratePool>
      <AztecCheck
        id={22008}
        name="Shuffled Melon Crate: In front of DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22009}
        name="Shuffled Melon Crate: In DK's room in the first tunnel"
        region="Aztec Caves"
        canGetLogic={canReachDKKasplat.in}
        canGetBreak={canReachDKKasplat.out}
      />
      <AztecCheck
        id={22017}
        name="Shuffled Melon Crate: Near Chunky's barrel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22018}
        name="Shuffled Melon Crate: Left of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22019}
        name="Shuffled Melon Crate: Right of the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22020}
        name="Shuffled Melon Crate: Behind the caged GB"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22035}
        name="Shuffled Melon Crate: Inside DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={canReachQSTunnel.in}
        canGetBreak={canReachQSTunnel.out}
      />
      <AztecCheck
        id={22036}
        name="Shuffled Melon Crate: Vanilla Warp 1, level start"
        region="Aztec Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={22039}
        name="Shuffled Melon Crate: Vanilla Warp 2, end of the middle tunnel"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
      <AztecCheck
        id={22040}
        name="Shuffled Melon Crate: Vanilla Warp 3, at Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachArea2.in}
        canGetBreak={canReachArea2.out}
      />
    </CratePool>
  )
}

const CaveCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default CaveCrates
