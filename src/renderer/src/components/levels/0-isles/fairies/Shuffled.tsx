import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useKremFairy, useFactoryFairy, useForestLobby, useIslesUpper, useIslesFungiIsland, useIslesRocket, useIslesKremAscent, useCheckBFIInitial, useAztecLobbyChunky, useCheckLankyCastle, useCastleLobbyGeneric, useCavesKasplat } from '@renderer/hooks/isles'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useRocket, useClimbing } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const vanillaFairy2 = useKremFairy()
  const vanillaFairy3 = useFactoryFairy()
  const vanillaFairy4 = useForestFairy()
  const canReachAztecLobby = useIslesUpper()
  const canReachForestLobby = useIslesFungiIsland()
  const canUseJetbarrel = useIslesRocket()
  const hasJetbarrel = useRocket()
  const canReachFactoryLobby = useIslesKremAscent()
  const canGoInBFI = useCheckBFIInitial()
  const canReachAztecLobbyChunky = useAztecLobbyChunky()
  const canReachCastleLobbyLanky = useCheckLankyCastle()
  const canReachCastleLobby = useCastleLobbyGeneric()
  const iceWallBreakdown = useCavesKasplat()
  const hasClimbing = useClimbing()
  return (
    <FairyPool>
      <IslesCheck
        id={40000}
        name="Shuffled Fairy: Vanilla Location #1 (behind BFI)"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={40001}
        name="Shuffled Fairy: Vanilla Location #2 (top of K. Rool's Island)"
        region="K. Rool's Island"
        canGetLogic={vanillaFairy2}
      />
      <IslesCheck
        id={40002}
        name="Shuffled Fairy: Vanilla Location #3 (crate inside Factory Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={vanillaFairy3.in}
        canGetBreak={vanillaFairy3.out}
      />
      <IslesCheck
        id={40003}
        name="Shuffled Fairy: Vanilla Location #4 (my condolences...)"
        region="Japes-Forest Lobbies"
        canGetLogic={vanillaFairy4.in}
        canGetBreak={vanillaFairy4.out}
      />
      <IslesCheck
        id={40004}
        name="Shuffled Fairy: Aztec Roof"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in && hasCam}
        canGetBreak={canReachAztecLobby.out && hasCam}
      />
      <IslesCheck
        id={40005}
        name="Shuffled Fairy: Behind Forest Lobby building"
        region="Outer Isles"
        canGetLogic={canReachForestLobby && hasCam}
      />
      <IslesCheck
        id={40006}
        name="Shuffled Fairy: On top of BFI itself"
        region="Outer Isles"
        canGetLogic={canReachForestLobby && canUseJetbarrel && hasJetbarrel && hasCam} //...Yeah, this one's pretty complex. FUN FACT: I didn't even know the top of BFI was reachable this way until I started doing this Randomizer stuff! D:
      />
      <IslesCheck
        id={40007}
        name="Shuffled Fairy: Near Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasCam}
      />
      <IslesCheck
        id={40008}
        name="Shuffled Fairy: Over K. Lumsy's Island"
        region="K. Rool's Island"
        canGetLogic={canReachForestLobby && canUseJetbarrel && hasJetbarrel && hasCam}
        canGetBreak={isBreathing}
      />
      <IslesCheck
        id={40009}
        name="Shuffled Fairy: Bottom of K. Rool's Island"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={40010}
        name="Shuffled Fairy: Flying above the Fairy Queen herself (LOL WUT)"
        region="Outer Isles"
        canGetLogic={canGoInBFI && hasCam}
      />
      <IslesCheck
        id={40011}
        name="Shuffled Fairy: Inside Chunky's room in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canReachAztecLobbyChunky.in && hasCam}
        canGetBreak={canReachAztecLobbyChunky.out && hasCam}
      />
      <IslesCheck
        id={40012}
        name="Shuffled Fairy: At Lanky's Castle Lobby checks"
        region="Caves-Helm Lobbies"
        canGetLogic={canReachCastleLobbyLanky.in && hasCam}
        canGetBreak={canReachCastleLobby.out && hasCam}
      />
      <IslesCheck
        id={40012}
        name="Shuffled Fairy: At DK's lava Banana"
        region="Caves-Helm Lobbies"
        canGetLogic={iceWallBreakdown.in && hasCam}
        canGetBreak={iceWallBreakdown.out && hasCam}
      />
      <IslesCheck
        id={40013}
        name="Shuffled Fairy: In Snide's room"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasCam}
      />
      <IslesCheck
        id={40014}
        name="Shuffled Fairy: At the exit to DK's Treehouse area"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={40015}
        name="Shuffled Fairy: 'Hidden mountain' in between Training Grounds and Cranky's"
        region="DK Island"
        canGetLogic={hasClimbing && hasCam}
        canGetBreak={isBreathing}
      />
      <IslesCheck
        id={40016}
        name="Shuffled Fairy: Looking out the windows in DK's Treehouse"
        region="DK Island"
        canGetLogic={hasClimbing && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
