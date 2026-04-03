import IslesCheck from '../check'
import { useAnyKong, useAnyGun, useDive } from '@renderer/hooks/kongs'

const DKIslandKasplats: React.FC = () => {
  const isBreathing = useAnyKong()
  const hasAGun = useAnyGun()
  const hasDiving = useDive()
    return (
    <>
      <IslesCheck
        id={50005}
        name="Shuffled Kasplat: The &quot;beaver beach&quot; in front of Japes Lobby"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={50016}
        name="Shuffled Kasplat: Roof of Aztec Lobby"
        region="DK Island"
        canGetLogic={canDoRoofDirt.in}
        canGetBreak={canDoRoofDirt.out}
      />
      <IslesCheck
        id={50017}
        name="Shuffled Kasplat: In the waterfall's pool"
        region="DK Island"
        canGetLogic={hasDiving.in && (hasAGun || hasOranges || hasAnInstrument)}
        canGetBreak={hasDiving.out && (hasAGun || hasOranges || hasAnInstrument)}
      />
    </>
    )
}

export default DKIslandKasplats
