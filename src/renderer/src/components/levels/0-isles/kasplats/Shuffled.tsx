import KasplatPool from '@renderer/components/pools/Kasplats'
import {  } from '@renderer/hooks/isles'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import {  } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <KasplatPool>
      <IslesCheck
        id={50000}
        name="Shuffled Kasplat: Vanilla Location #1 (behind BFI)"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={50001}
        name="Shuffled Kasplat: Vanilla Location #2 (top of K. Rool's Island)"
        region="K. Rool's Island"
        canGetLogic={vanillaFairy2}
      />
      <IslesCheck
        id={50002}
        name="Shuffled Kasplat: Vanilla Location #3 (crate inside Factory Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={vanillaFairy3.in}
        canGetBreak={vanillaFairy3.out}
      />
      <IslesCheck
        id={50003}
        name="Shuffled Kasplat: Vanilla Location #4 (my condolences...)"
        region="Japes-Forest Lobbies"
        canGetLogic={vanillaFairy4.in}
        canGetBreak={vanillaFairy4.out}
      />
      <IslesCheck
        id={50004}
        name="Shuffled Kasplat: Aztec Roof"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in && hasCam}
        canGetBreak={canReachAztecLobby.out && hasCam}
      />
      <IslesCheck
        id={50005}
        name="Shuffled Kasplat: Behind Forest Lobby building"
        region="Outer Isles"
        canGetLogic={canReachForestLobby && hasCam}
      />
      <IslesCheck
        id={50006}
        name="Shuffled Kasplat: On top of BFI itself"
        region="Outer Isles"
        canGetLogic={canReachForestLobby && canUseJetbarrel && hasJetbarrel && hasCam} //...Yeah, this one's pretty complex. FUN FACT: I didn't even know the top of BFI was reachable this way until I started doing this Randomizer stuff! D:
      />
      <IslesCheck
        id={50007}
        name="Shuffled Kasplat: Near Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasCam}
      />
      <IslesCheck
        id={50008}
        name="Shuffled Kasplat: Over K. Lumsy's Island"
        region="K. Rool's Island"
        canGetLogic={canReachForestLobby && canUseJetbarrel && hasJetbarrel && hasCam}
        canGetBreak={isBreathing}
      />
      <IslesCheck
        id={50009}
        name="Shuffled Kasplat: Bottom of K. Rool's Island"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={50010}
        name="Shuffled Kasplat: Flying above the Fairy Queen herself (LOL WUT)"
        region="Outer Isles"
        canGetLogic={canGoInBFI && hasCam}
      />
      <IslesCheck
        id={50011}
        name="Shuffled Kasplat: Inside Chunky's room in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canReachAztecLobbyChunky.in && hasCam}
        canGetBreak={canReachAztecLobbyChunky.out && hasCam}
      />
      <IslesCheck
        id={50012}
        name="Shuffled Kasplat: At Lanky's Castle Lobby checks"
        region="Caves-Helm Lobbies"
        canGetLogic={canReachCastleLobbyLanky.in && hasCam}
        canGetBreak={canReachCastleLobby.out && hasCam}
      />
      <IslesCheck
        id={50013}
        name="Shuffled Kasplat: At DK's lava Banana"
        region="Caves-Helm Lobbies"
        canGetLogic={iceWallBreakdown.in && hasCam}
        canGetBreak={iceWallBreakdown.out && hasCam}
      />
      <IslesCheck
        id={50014}
        name="Shuffled Kasplat: In Snide's room"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasCam}
      />
      <IslesCheck
        id={50015}
        name="Shuffled Kasplat: At the exit to DK's Treehouse area"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={50016}
        name="Shuffled Kasplat: 'Hidden mountain' in between Training Grounds and Cranky's"
        region="DK Island"
        canGetLogic={hasClimbing && hasCam}
        canGetBreak={isBreathing}
      />
      <IslesCheck
        id={50017}
        name="Shuffled Kasplat: Looking out the windows in DK's Treehouse"
        region="DK Island"
        canGetLogic={hasClimbing && hasCam}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
