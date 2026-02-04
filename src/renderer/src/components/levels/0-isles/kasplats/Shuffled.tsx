import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import KasplatPool from '@renderer/components/pools/Kasplats'
import { useHelmKasplat, useCastleKasplat, useCavesKasplat, useFactoryKasplat, useGalleonKasplat, useIslesKremAscent, useCheckChunkyPound } from '@renderer/hooks/isles'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useAnyKong, useGrab, useHighGrab } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
const DKKasplat = useHelmKasplat()
const diddyKasplat = useCastleKasplat()
const lankyKasplat = useCavesKasplat()
const tinyKasplat = useFactoryKasplat()
const chunkyKasplat = useGalleonKasplat()
const isBreathing = useAnyKong()
const canReachFactoryLobby = useIslesKremAscent()
const hasGrab = useGrab()
const highGrab = useHighGrab()
const canPoundTheX = useCheckChunkyPound()
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
  return (
    <KasplatPool>
      <IslesCheck
        id={50000}
        name="Shuffled Kasplat: DK's Vanilla Location (Helm Lobby)"
        region="Caves-Helm Lobbies"
        canGetLogic={DKKasplat.in}
        canGetBreak={DKKasplat.out}
      />
      <IslesCheck
        id={50001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (a cage in Castle Lobby)"
        region="Caves-Helm Lobbies"
        canGetLogic={diddyKasplat.in}
        canGetBreak={diddyKasplat.out}
      />
      <IslesCheck
        id={50002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (a wall in Caves Lobby)"
        region="Caves-Helm Lobbies"
        canGetLogic={lankyKasplat.in}
        canGetBreak={lankyKasplat.out}
      />
      <IslesCheck
        id={50003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (a box in Factory Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={tinyKasplat.in}
        canGetBreak={tinyKasplat.out}
      />
      <IslesCheck
        id={50004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (Galleon Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={chunkyKasplat.in}
        canGetBreak={chunkyKasplat.out}
      />
      <IslesCheck
        id={50005}
        name="Shuffled Kasplat: The &quot;beaver beach&quot; in front of Japes Lobby"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={50006}
        name="Shuffled Kasplat: Factory Lobby, above the DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canReachFactoryLobby && hasGrab}
        canGetBreak={highGrab}
      />
      <IslesCheck
        id={50007}
        name="Shuffled Kasplat: Inside the big rock opened by pounding the X"
        region="Outer Isles"
        canGetLogic={canPoundTheX}
      />
      <IslesCheck
        id={50008}
        name="Shuffled Kasplat: Behind Factory Lobby"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={50009}
        name="Shuffled Kasplat: On the X"
        region="Outer Isles"
        canGetLogic={isBreathing && !didCheck[42]}
        canGetBreak={isBreathing && didCheck[42] && hasDiving.out}
      />
      <IslesCheck
        id={50010}
        name="Shuffled Kasplat: Behind the Forest Lobby"
        region="Outer Isles"
        canGetLogic={canReachForestLobby}
      />
      <IslesCheck
        id={50011}
        name="Shuffled Kasplat: On Diddy's platform in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoGuitarGB.in}
        canGetBreak={canDoGuitarGB.out}
      />
      <IslesCheck
        id={50012}
        name="Shuffled Kasplat: Inside the &quot;sprint cage&quot; in K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={canDoSprintGB.in}
        canGetBreak={canDoSprintGB.out}
      />
      <IslesCheck
        id={50013}
        name="Shuffled Kasplat: Japes Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canReachJapesLobby}
      />
      <IslesCheck
        id={50014}
        name="Shuffled Kasplat: Behind Helm Lobby"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={50015}
        name="Shuffled Kasplat: In Snide's room"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
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
        canGetLogic={hasDiving.out && (hasAGun || hasOranges || hasAnInstrument)}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
