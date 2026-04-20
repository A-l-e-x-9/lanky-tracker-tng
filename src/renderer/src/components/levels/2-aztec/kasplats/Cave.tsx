import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useGeneralThing, useCoconutKasplat, useTunnelKasplat, useDkTunnelGb, useAztecBack } from '@renderer/hooks/aztec'
import { usePineapple } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const DKVanillaKasplat = useCoconutKasplat()
const tinyVanillaKasplat = useTunnelKasplat()
const canDoQSGB = useDkTunnelGb()
const canEnterBack = useAztecBack()
const hasPineapples = usePineapple()
return (
    <KasplatPool>
      <AztecCheck
        id={52000}
        name="Shuffled Kasplat: DK's Vanilla Location (a sub-tunnel at the level start)"
        region="Aztec Caves"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <AztecCheck
        id={52003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (first 3-way intersection of middle tunnel)"
        region="Aztec Caves"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <AztecCheck
        id={52005}
        name="Shuffled Kasplat: In DK's quicksand tunnel"
        region="Aztec Caves"
        canGetLogic={canDoQSGB.in}
        canGetBreak={canDoQSGB.out}
      />
      <AztecCheck
        id={52008}
        name="Shuffled Kasplat: Near the giant boulder"
        region="Aztec Caves"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
      <AztecCheck
        id={52009}
        name="Shuffled Kasplat: In the vase room"
        region="Aztec Caves"
        canGetLogic={isBreathing.in && hasPineapples}
        canGetBreak={isBreathing.out && hasPineapples}
      />
    </KasplatPool>
  )
}

const CaveKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default CaveKasplats
