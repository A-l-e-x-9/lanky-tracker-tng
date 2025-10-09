import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle, useSlamCastle, useOpenCrypt } from '@renderer/hooks/castle'
import { useDefeatBat, useDefeatKosha } from '@renderer/hooks/enemies'
import {
  useAnyKong,
  useCharge,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useGrape,
  usePeanut,
  usePineapple,
  useSlam,
  useClimbing
} from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const UndergroundEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const anyKong = useAnyKong()
  const diddy = useDiddy()
  const dk = useDk()
  const kosha = useDefeatKosha()
  const bat = useDefeatBat()
  const peanut = usePeanut()
  const charge = useCharge()
  const pineapple = usePineapple()
  const coconut = useCoconut()
  const slam = useSlam()
  const grape = useGrape()
  const feather = useFeather()
  const hasClimbing = useClimbing()
  const preOpenedCrypt = useOpenCrypt()
  return (
    <DropPool>
      <CastleCheck
        id={7327}
        name="Enemy in front of Crypt"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong && kosha.in && hasClimbing}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CastleCheck
        id={7328}
        name="Enemy at the Right Stairs to Crypt"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong && kosha.in && hasClimbing}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CastleCheck
        id={7320}
        name="Enemy at the Left Stairs to Crypt"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong && hasClimbing}
        canGetBreak={inStage && anyKong}
      />
      <CastleCheck
        id={7330}
        name="Enemy Guarding the Mausoleum"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong && bat.in && hasClimbing}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7331}
        name="Enemy Guarding Funky's"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong && bat.in && hasClimbing}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7332}
        name="Enemy Between Funky's and Nearby Tag Barrel"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong && bat.in && hasClimbing}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7333}
        name="Enemy 0 inside Diddy's Coffins"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge}
      />
      <CastleCheck
        id={7334}
        name="Enemy 1 inside Diddy's Coffins"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge}
      />
      <CastleCheck
        id={7335}
        name="Enemy 2 inside Diddy's Coffins"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge}
      />
      <CastleCheck
        id={7336}
        name="Enemy 3 inside Diddy's Coffins"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge}
      />
      <CastleCheck
        id={7337}
        name="Enemy 0 inside Chunky's Coffin"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam}
      />
      <CastleCheck
        id={7338}
        name="Enemy 1 inside Chunky's Coffin"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam}
      />
      <CastleCheck
        id={7339}
        name="Enemy 2 inside Chunky's Coffin"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam}
      />
      <CastleCheck
        id={7340}
        name="Enemy 3 inside Chunky's Coffin"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam}
      />
      <CastleCheck
        id={7341}
        name="Enemy at DK's Minecart Entry"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (coconut || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (coconut || preOpenedCrypt)}
      />
      <CastleCheck
        id={7342}
        name="Enemy at Fork to DK and Diddy's Crypts"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (coconut || peanut || pineapple || preOpenedCrypt)}
      />
      <CastleCheck
        id={7343}
        name="Enemy Outside Diddy's Crypt"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (coconut || peanut || pineapple || preOpenedCrypt)}
      />
      <CastleCheck
        id={7344}
        name="Enemy Outside Chunky's Crypt"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (coconut || peanut || pineapple || preOpenedCrypt)}
      />
      <CastleCheck
        id={7345}
        name="Enemy Outside Tiny's Mausoleum Room"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (feather || grape || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (feather || grape || preOpenedCrypt)}
      />
      <CastleCheck
        id={7346}
        name="Enemy on Lanky's Mausolem Path, at Switch"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (feather || grape || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (feather || grape || preOpenedCrypt)}
      />
      <CastleCheck
        id={7347}
        name="Enemy near Lanky's Mausoleum Gate"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && (feather || grape || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (feather || grape || preOpenedCrypt)}
      />
      <CastleCheck
        id={7348}
        name="Enemy at Upper Cave Dungeon Entrance"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong && bat.in}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7350}
        name="Enemy at Upper Cave Lower Warp 1 Entrance"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong && bat.in}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7351}
        name="Enemy at Upper Cave Central Warp Area Entrance"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7319}
        name="Enemy in DK's Face Dungeon"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7320}
        name="Enemy in Diddy's Chair Dungeon"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && diddy && canSlam && kosha.in}
        canGetBreak={inStage && diddy && canSlam && kosha.out}
      />
      <CastleCheck
        id={7321}
        name="Enemy Outside Lanky's Acid Dungeon"
        region="Castle Crypt and Dungeon"
        canGetLogic={inStage && anyKong && kosha.in}
        canGetBreak={inStage && anyKong && kosha.out}
      />
    </DropPool>
  )
}

export default UndergroundEnemies
