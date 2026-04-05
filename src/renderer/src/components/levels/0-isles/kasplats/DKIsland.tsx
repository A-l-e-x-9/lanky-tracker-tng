import IslesCheck from '../check'
import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useIslesCrossFungi } from '@renderer/hooks/isles'
import { useAnyKong, useAnyGun, useDive, useOrange, useAnyMusic } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const isBreathing = useAnyKong()
  const hasAGun = useAnyGun()
  const hasDiving = useDive()
  const hasOranges = useOrange()
  const canDoRoofDirt = useIslesCrossFungi()
  const hasAnInstrument = useAnyMusic()
    return (
    <KasplatPool>
      <IslesCheck
        id={50005}
        name="Shuffled Kasplat: The &quot;beaver beach&quot; in front of Japes Lobby"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={50017}
        name="Shuffled Kasplat: Roof of Aztec Lobby"
        region="DK Island"
        canGetLogic={canDoRoofDirt.in}
        canGetBreak={canDoRoofDirt.out}
      />
      <IslesCheck
        id={50018}
        name="Shuffled Kasplat: In the waterfall's pool"
        region="DK Island"
        canGetLogic={hasDiving.in && (hasAGun || hasOranges || hasAnInstrument)}
        canGetBreak={hasDiving.out && (hasAGun || hasOranges || hasAnInstrument)}
      />
    </KasplatPool>
    )
}

const DKIslandKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default DKIslandKasplats
