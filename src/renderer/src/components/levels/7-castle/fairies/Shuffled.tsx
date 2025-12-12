import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useTreeFairy, useRoomFairy, useSlamCastle, useLankyDungeonGb, useDkDungeonGb, useDkRoomGb } from '@renderer/hooks/castle'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useRocket, useDiddy, useClimbing, useLanky } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const vanillaFairy1 = useTreeFairy()
  const vanillaFairy2 = useRoomFairy()
  const hasJetbarrel = useRocket()
  const hasSlam = useSlamCastle()
  const hasDiddy = useDiddy()
  const canReachLankyDungeon = useLankyDungeonGb()
  const canReachDKDungeon = useDkDungeonGb()
  const hasClimbing = useClimbing()
  const hasLanky = useLanky()
  const canReachLibrary = useDkRoomGb()
  return (
    <FairyPool>
      <CastleCheck
        id={47000}
        name="Shuffled Fairy: Vanilla Location #1 (DK's tree Banana)"
        region="Creepy Castle Main"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <CastleCheck
        id={47001}
        name="Shuffled Fairy: Vanilla Location #2 (exhibit in Chunky's museum)"
        region="Various Castle Rooms"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
      />
      <CastleCheck
        id={47002}
        name="Shuffled Fairy: At vanilla level start"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={47003}
        name="Shuffled Fairy: At the tree"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={47004}
        name="Shuffled Fairy: Over the moat"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={47005}
        name="Shuffled Fairy: Locked out of the library <del>by Patchy and Koakuma</del>"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={47006}
        name="Shuffled Fairy: Trying to dump her Blueprints"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={47007}
        name="Shuffled Fairy: Top of the Wind Tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasJetbarrel}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={47008}
        name="Shuffled Fairy: Gonna swing from the chandelier in the Ballroom"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam}
      />
      <CastleCheck
        id={47009}
        name="Shuffled Fairy: In Lanky's dungeon room"
        region="Castle Dungeon"
        canGetLogic={canReachLankyDungeon.in && hasCam}
        canGetBreak={canReachLankyDungeon.out && hasCam}
      />
      <CastleCheck
        id={47010}
        name="Shuffled Fairy: In DK's dungeon room"
        region="Castle Dungeon"
        canGetLogic={canReachDKDungeon.in && hasCam}
        canGetBreak={canReachDKDungeon.out && hasCam}
      />
      <CastleCheck
        id={47011}
        name="Shuffled Fairy: Over the Mausoleum"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={47012}
        name="Beloved Tomboyish Shuffled Fairy, New (what a) Funky Mode"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={47013}
        name="Shuffled Fairy: Over the Crypt entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={47014}
        name="Shuffled Fairy: Inside Lanky's Wind Tunnel"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasLanky && hasSlam}
        canGetBreak={isBreathing.out && hasLanky && hasSlam}
      />
      <CastleCheck
        id={47015}
        name="Shuffled Fairy: Voilé, DK's magic library"
        region="Various Castle Rooms"
        canGetLogic={canReachLibrary.in && hasCam}
        canGetBreak={canReachLibrary.out && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
