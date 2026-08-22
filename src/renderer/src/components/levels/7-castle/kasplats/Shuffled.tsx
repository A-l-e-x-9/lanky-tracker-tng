import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useTreeKasplat, useMausoleumKasplat, useLonelyKasplat, useOpenCrypt } from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useCoconut, useClimbing } from '@renderer/hooks/kongs'
import CastleCheck from '../check'
import DungeonKasplats from './Dungeon'
import RoomKasplats from './Rooms'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useTreeKasplat()
const diddyVanillaKasplat = useMausoleumKasplat()
const tinyVanillaKasplat = useLonelyKasplat()
const isBreathing = useGeneralThing()
const hasCoconuts = useCoconut()
const cryptPreOpened = useOpenCrypt()
const hasClimbing = useClimbing()
  return (
    <KasplatPool>
      <DungeonKasplats />
      <RoomKasplats />
      <CastleCheck
        id={57000}
        name="Shuffled Kasplat: DK's Vanilla Location (in the tree)"
        region="Creepy Castle Main"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <CastleCheck
        id={57001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (between the Crypt and Mausoleum)"
        region="Castle Crypt"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <CastleCheck
        id={57003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (past the Crypt, almost to the vanilla level start)"
        region="Creepy Castle Main"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <CastleCheck
        id={57005}
        name="Shuffled Kasplat: Where the vanilla Melon Crate would be"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57007}
        name="Shuffled Kasplat: At the lowest Troff 'n' Scoff portal"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57016}
        name="Shuffled Kasplat: Outside DK's minecart game"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && (hasCoconuts || cryptPreOpened) && hasClimbing}
        canGetBreak={isBreathing.out && (hasCoconuts || cryptPreOpened)}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
