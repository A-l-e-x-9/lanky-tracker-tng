import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useArena, usePaintingDirt, useGeneralDirt, useMtnCrate, useDkFreebieGb, useJapesMine } from '@renderer/hooks/japes'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachFunky = useArena()
const hasShockwave = useShockwave()
const canDoVanillaDirt = usePaintingDirt()
const isBreathing = useGeneralDirt()
const canDoVanillaCrate1 = useMtnCrate()
const canReachDiddyCage = useDkFreebieGb()
const canReachMtn = useJapesMine()
  return (
    <RainbowCoinPool>
      <JapesCheck
        id={31000}
        name="Shuffled Dirt Patch: In front of Funky's"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in && hasShockwave}
        canGetBreak={canReachFunky.out && hasShockwave}
      />
      <JapesCheck
        id={31001}
        name="Shuffled Dirt Patch: Vanilla Location (in front of door to Lanky's painting room)"
        region="Japes Hillside"
        canGetLogic={canDoVanillaDirt.in}
        canGetBreak={canDoVanillaDirt.out}
      />
      <JapesCheck
        id={31008}
        name="Shuffled Dirt Patch: In front of the Painting Hill"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31023}
        name="Shuffled Dirt Patch: At the minecart exit"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31024}
        name="Shuffled Dirt Patch: Near Snide's"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in && hasShockwave}
        canGetBreak={canReachFunky.out && hasShockwave}
      />
      <JapesCheck
        id={31025}
        name="Shuffled Dirt Patch: Behind Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canDoVanillaCrate1.in && hasShockwave}
        canGetBreak={canDoVanillaCrate1.out && hasShockwave}
      />
      <JapesCheck
        id={31026}
        name="Shuffled Dirt Patch: In front of Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in && hasShockwave}
        canGetBreak={canReachDiddyCage.out && hasShockwave}
      />
      <JapesCheck
        id={31027}
        name="Shuffled Dirt Patch: Near the Barrel Cannon to Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in && hasShockwave}
        canGetBreak={canReachDiddyCage.out && hasShockwave}
      />
      <JapesCheck
        id={31028}
        name="Shuffled Dirt Patch: Vanilla Location 2 (behind Diddy's Mountain)"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31029}
        name="Shuffled Dirt Patch: Near the cannon platform"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in && hasShockwave}
        canGetBreak={canReachDiddyCage.out && hasShockwave}
      />
      <JapesCheck
        id={31030}
        name="Shuffled Dirt Patch: In the Troff 'n' Scoff alcove"
        region="Japes Hillside"
        canGetLogic={isBreathing.in && hasClimbing && hasVines}
        canGetBreak={isBreathing.out && canReachDiddyCage.out}
      />
      <JapesCheck
        id={31035}
        name="Shuffled Dirt Patch: Vanilla Warp 2, in front of Diddy's mountain"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31037}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at the painting room"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31040}
        name="Shuffled Dirt Patch: Vanilla Warp 5, on top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={isBreathing.in && (didGB[1011] || hasAllBananaports)}
        canGetBreak={isBreathing.out && (didGB[1011] || hasAllBananaports)}
      />
    </RainbowCoinPool>
  )
}

const HillsideDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default HillsideDirt
