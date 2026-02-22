import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGateKasplat, useChunkyUndergroundGb, useIslesKremAscent, useCheckChunkyPound, useIslesFungiIsland, useCavesLobbyGeneric, useCheckLankyPrison, useJapesLobbyGeneric, usePlayLobby, useIslesCrossFungi } from '@renderer/hooks/japes'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useAnyKong, useGrab, useHighGrab, useDive, useRocket, useBoulderTech, useTwirl, useAnyGun, useOrange, useAnyMusic } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const Shuffled: React.FC = () => {
const notChunkyKasplat = useGateKasplat()
const chunkyKasplat = useChunkyUndergroundGb()
const isBreathing = useAnyKong()
const canReachFactoryLobby = useIslesKremAscent()
const hasGrab = useGrab()
const highGrab = useHighGrab()
const canPoundTheX = useCheckChunkyPound()
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
const hasDiving = useDive()
const canReachForestLobby = useIslesFungiIsland()
const canDoGuitarGB = useCavesLobbyGeneric()
const hasJetbarrel = useRocket()
const boulderTech = useBoulderTech()
const hinaKagiyama = useTwirl()
const canDoSprintGB = useCheckLankyPrison()
const canReachJapesLobby = useJapesLobbyGeneric()
const canReachHelmLobby = usePlayLobby('Hideout Helm')
const canDoRoofDirt = useIslesCrossFungi()
const hasAGun = useAnyGun()
const hasOranges = useOrange()
const hasAnInstrument = useAnyMusic()
  return (
    <KasplatPool>
      <JapesCheck
        id={51000}
        name="Shuffled Kasplat: DK's Vanilla Location (lower portion of Hive Tunnel)"
        region="Hive Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (Stormy Cave, near Lanky's painting room)"
        region="Stormy Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (near his slope barrel in the Stormy Cave)"
        region="Stormy Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (upper portion of Hive Tunnel)"
        region="Hive Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (end of his mine, to the right)"
        region="Japes Caves and Mines"
        canGetLogic={chunkyKasplat.in}
        canGetBreak={chunkyKasplat.out}
      />
      <JapesCheck
        id={51005}
        name="Shuffled Kasplat: Behind the Rambi Wall"
        region="Stormy Area"
        canGetLogic={canReachRambiArea}
      />
      <JapesCheck
        id={51006}
        name="Shuffled Kasplat: Top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canDoDiddyMtnGB}
      />
      <JapesCheck
        id={51007}
        name="Shuffled Kasplat: Under Chunky's giant GB"
        region="Hive Area"
        canGetLogic={canReachHiveArea}
      />
      <JapesCheck
        id={51008}
        name="Shuffled Kasplat: With Tiny's caged GB"
        region="Japes Hillside"
        canGetLogic={canDoTinyCageGB}
      />
      <JapesCheck
        id={51009}
        name="Shuffled Kasplat: At the vanilla level start"
        region="Japes Lowlands"
        canGetLogic={isBreathing}
      />
      <JapesCheck
        id={51010}
        name="Shuffled Kasplat: In Diddy's cave"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyCave}
      />
      <JapesCheck
        id={51011}
        name="Shuffled Kasplat: In the river"
        region="Japes Lowlands"
        canGetLogic={(hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={hasOranges && hasDiving.out}
      />
      <JapesCheck
        id={51012}
        name="Shuffled Kasplat: In the Rambi tunnel's pool"
        region="Stormy Area"
        canGetLogic={canReachRambiArea && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={canReachRambiArea && hasOranges && hasDiving.out}
      />
      <JapesCheck
        id={51013}
        name="Shuffled Kasplat: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyArea}
      />
      <JapesCheck
        id={51014}
        name="Shuffled Kasplat: The Troff 'n' Scoff door on the Hillside"
        region="Japes Hillside"
        canGetLogic={hasVines && hasClimbing}
        canGetBreak={canReachDiddyCage}
      />
      <JapesCheck
        id={51015}
        name="Shuffled Kasplat: In Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canReachDiddyMtn}
      />
      <JapesCheck
        id={51016}
        name="Shuffled Kasplat: In the hive"
        region="Hive Area"
        canGetLogic={canGoInHive}
      />
      <JapesCheck
        id={51017}
        name="Shuffled Kasplat: In front of Lanky's painting room entrance"
        region="Japes Hillside"
        canGetLogic={canReachPaintingRoom}
      />
      <JapesCheck
        id={51018}
        name="Shuffled Kasplat: The minecart game's exit"
        region="Japes Hillside"
        canGetLogic={isBreathing}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
