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
  useClimbing,
  useCamera
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
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <CastleCheck
        id={7327}
        name="Castle Enemy: Low Cave Near Crypt"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && kosha.in && hasClimbing}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CastleCheck
        id={7328}
        name="Castle Enemy: Low Cave Near Stair Right"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && kosha.in && hasClimbing}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CastleCheck
        id={7320}
        name="Castle Enemy: Low Cave Near Stair Left"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasClimbing}
        canGetBreak={inStage && anyKong}
      />
      <CastleCheck
        id={7330}
        name="Castle Enemy: Low Cave Near Mausoleum"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat.in && hasClimbing}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7331}
        name="Castle Enemy: Low Cave Near Funky"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat.in && hasClimbing}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7332}
        name="Castle Enemy: Low Cave Near Tag"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat.in && hasClimbing}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7333}
        name="Castle Enemy: Crypt Diddy Coffin 0"
        region="Castle Underground"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge}
      />
      <CastleCheck
        id={7334}
        name="Castle Enemy: Crypt Diddy Coffin 1"
        region="Castle Underground"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge}
      />
      <CastleCheck
        id={7335}
        name="Castle Enemy: Crypt Diddy Coffin 2"
        region="Castle Underground"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge}
      />
      <CastleCheck
        id={7336}
        name="Castle Enemy: Crypt Diddy Coffin 3"
        region="Castle Underground"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge}
      />
      <CastleCheck
        id={7337}
        name="Castle Enemy: Crypt Chunky Coffin 0"
        region="Castle Underground"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam}
      />
      <CastleCheck
        id={7338}
        name="Castle Enemy: Crypt Chunky Coffin 1"
        region="Castle Underground"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam}
      />
      <CastleCheck
        id={7339}
        name="Castle Enemy: Crypt Chunky Coffin 2"
        region="Castle Underground"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam}
      />
      <CastleCheck
        id={7340}
        name="Castle Enemy: Crypt Chunky Coffin 3"
        region="Castle Underground"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam}
      />
      <CastleCheck
        id={7341}
        name="Castle Enemy: Crypt Minecart Entry"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (coconut || preOpenedCrypt)}
      />
      <CastleCheck
        id={7342}
        name="Castle Enemy: Crypt Fork"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (coconut || peanut || pineapple || preOpenedCrypt)}
      />
      <CastleCheck
        id={7343}
        name="Castle Enemy: Crypt Near Diddy"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (coconut || peanut || pineapple || preOpenedCrypt)}
      />
      <CastleCheck
        id={7344}
        name="Castle Enemy: Crypt Near Chunky"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (coconut || peanut || pineapple || preOpenedCrypt)}
      />
      <CastleCheck
        id={7345}
        name="Castle Enemy: Mausoleum Tiny"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (feather || grape || preOpenedCrypt)}
      />
      <CastleCheck
        id={7346}
        name="Castle Enemy: Mausoleum Lanky Switch"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (feather || grape || preOpenedCrypt)}
      />
      <CastleCheck
        id={7347}
        name="Castle Enemy: Mausoleum Lanky Gate"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape || preOpenedCrypt) && hasClimbing}
        canGetBreak={inStage && (feather || grape || preOpenedCrypt)}
      />
      <CastleCheck
        id={7348}
        name="Castle Enemy: Upper Cave Near Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat.in}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7350}
        name="Castle Enemy: Upper Cave Near Warp 1 Entrance"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && bat.in}
        canGetBreak={inStage && anyKong && bat.out}
      />
      <CastleCheck
        id={7351}
        name="Castle Enemy: Upper Cave Near Central Warp Area Entrance"
        region="Castle Underground"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7319}
        name="Castle Enemy: Dungeon Face Room"
        region="Castle Underground"
        canGetLogic={inStage && dk && canSlam}
      />
      <CastleCheck
        id={7320}
        name="Castle Enemy: Dungeon Chair Room"
        region="Castle Underground"
        canGetLogic={inStage && diddy && canSlam && kosha.in}
        canGetBreak={inStage && diddy && canSlam && kosha.out}
      />
      <CastleCheck
        id={7321}
        name="Castle Enemy: Dungeon Outside Lanky Room"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && kosha.in}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CastleCheck
        id={7427}
        name="Castle Enemy Photo: Low Cave Near Crypt"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasClimbing && hasFairyCam}
        canGetBreak={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7428}
        name="Castle Enemy Photo: Low Cave Near Stair Right"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasClimbing && hasFairyCam}
        canGetBreak={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7420}
        name="Castle Enemy Photo: Low Cave Near Stair Left"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasClimbing && hasFairyCam}
        canGetBreak={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7430}
        name="Castle Enemy Photo: Low Cave Near Mausoleum"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasClimbing && hasFairyCam}
        canGetBreak={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7431}
        name="Castle Enemy Photo: Low Cave Near Funky"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasClimbing && hasFairyCam}
        canGetBreak={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7432}
        name="Castle Enemy Photo: Low Cave Near Tag"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasClimbing && hasFairyCam}
        canGetBreak={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7433}
        name="Castle Enemy Photo: Crypt Diddy Coffin 0"
        region="Castle Underground"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge && hasFairyCam}
      />
      <CastleCheck
        id={7434}
        name="Castle Enemy Photo: Crypt Diddy Coffin 1"
        region="Castle Underground"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge && hasFairyCam}
      />
      <CastleCheck
        id={7435}
        name="Castle Enemy Photo: Crypt Diddy Coffin 2"
        region="Castle Underground"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge && hasFairyCam}
      />
      <CastleCheck
        id={7436}
        name="Castle Enemy Photo: Crypt Diddy Coffin 3"
        region="Castle Underground"
        canGetLogic={inStage && (peanut || preOpenedCrypt) && charge && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (peanut || preOpenedCrypt) && charge && hasFairyCam}
      />
      <CastleCheck
        id={7437}
        name="Castle Enemy Photo: Crypt Chunky Coffin 0"
        region="Castle Underground"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam && hasFairyCam}
      />
      <CastleCheck
        id={7438}
        name="Castle Enemy Photo: Crypt Chunky Coffin 1"
        region="Castle Underground"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam && hasFairyCam}
      />
      <CastleCheck
        id={7439}
        name="Castle Enemy Photo: Crypt Chunky Coffin 2"
        region="Castle Underground"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam && hasFairyCam}
      />
      <CastleCheck
        id={7440}
        name="Castle Enemy Photo: Crypt Chunky Coffin 3"
        region="Castle Underground"
        canGetLogic={inStage && (pineapple || preOpenedCrypt) && slam && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (pineapple || preOpenedCrypt) && slam && hasFairyCam}
      />
      <CastleCheck
        id={7441}
        name="Castle Enemy Photo: Crypt Minecart Entry"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || preOpenedCrypt) && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (coconut || preOpenedCrypt) && hasFairyCam}
      />
      <CastleCheck
        id={7442}
        name="Castle Enemy Photo: Crypt Fork"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasFairyCam}
      />
      <CastleCheck
        id={7443}
        name="Castle Enemy Photo: Crypt Near Diddy"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasFairyCam}
      />
      <CastleCheck
        id={7444}
        name="Castle Enemy Photo: Crypt Near Chunky"
        region="Castle Underground"
        canGetLogic={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (coconut || peanut || pineapple || preOpenedCrypt) && hasFairyCam}
      />
      <CastleCheck
        id={7445}
        name="Castle Enemy Photo: Mausoleum Tiny"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape || preOpenedCrypt) && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (feather || grape || preOpenedCrypt) && hasFairyCam}
      />
      <CastleCheck
        id={7446}
        name="Castle Enemy Photo: Mausoleum Lanky Switch"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape || preOpenedCrypt) && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (feather || grape || preOpenedCrypt) && hasFairyCam}
      />
      <CastleCheck
        id={7447}
        name="Castle Enemy Photo: Mausoleum Lanky Gate"
        region="Castle Underground"
        canGetLogic={inStage && (feather || grape || preOpenedCrypt) && hasClimbing && hasFairyCam}
        canGetBreak={inStage && (feather || grape || preOpenedCrypt) && hasFairyCam}
      />
      <CastleCheck
        id={7448}
        name="Castle Enemy Photo: Upper Cave Near Dungeon"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7450}
        name="Castle Enemy Photo: Upper Cave Near Warp 1 Entrance"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7451}
        name="Castle Enemy Photo: Upper Cave Near Central Warp Area Entrance"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7419}
        name="Castle Enemy Photo: Dungeon Face Room"
        region="Castle Underground"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7420}
        name="Castle Enemy Photo: Dungeon Chair Room"
        region="Castle Underground"
        canGetLogic={inStage && diddy && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7421}
        name="Castle Enemy Photo: Dungeon Outside Lanky Room"
        region="Castle Underground"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default UndergroundEnemies
