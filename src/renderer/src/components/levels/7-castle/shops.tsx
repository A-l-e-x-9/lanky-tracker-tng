import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ShopGenerator, { SnideGenerator } from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useCranky, whatAFunky, useCandy, useSnide, useClimbing } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const inStage = usePlayCastle()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasClimbing = useClimbing()
  const hasSnide = useSnide()
  const [crankyInFunkySpot, funkyInFunkySpot, candyInFunkySpot, snideInFunkySpot] = useDonkStore(useShallow((state) => [state.shuffledCastleCranky.castleCrankyFunky, state.shuffledCastleFunky.castleFunkyNoSwitch, state.shuffledCastleCandy.castleCandyFunky, state.shuffledCastleSnide.castleSnideFunky]))
  const [crankyInCandySpot, funkyInCandySpot, candyInCandySpot, snideInCandySpot] = useDonkStore(useShallow((state) => [state.shuffledCastleCranky.castleCrankyCandy, state.shuffledCastleFunky.castleFunkyCandy, state.shuffledCastleCandy.castleCandyNoSwitch, state.shuffledCastleSnide.castleSnideCandy]))
  return (
    <>
      <ShopGenerator
        baseId={7110}
        baseName="Castle Cranky"
        level="Creepy Castle"
        region={crankyInFunkySpot ? "Castle Crypt" : crankyInCandySpot ? "Castle Dungeon" : "Creepy Castle Main"}
        inLogic={hasCranky && (crankyInFunkySpot ? inStage.in && hasClimbing : inStage.in)}
        outLogic={hasCranky && inStage.out}
      />
      <ShopGenerator
        baseId={7120}
        baseName="Castle Funky"
        level="Creepy Castle"
        region={funkyInFunkySpot ? "Castle Crypt" : funkyInCandySpot ? "Castle Dungeon" : "Creepy Castle Main"}
        inLogic={hasFunky && (!funkyInFunkySpot ? inStage.in : inStage.in && hasClimbing)}
        outLogic={hasFunky && inStage.out}
      />
      <ShopGenerator
        baseId={7130}
        baseName="Castle Candy"
        level="Creepy Castle"
        region={candyInFunkySpot ? "Castle Crypt" : candyInCandySpot ? "Castle Dungeon" : "Creepy Castle Main"}
        inLogic={hasCandy && (candyInFunkySpot ? inStage.in && hasClimbing : inStage.in)}
        outLogic={hasCandy && inStage.out}
      />
      <SnideGenerator
        baseId={7140}
        baseName="Turn in Castle Blueprint for"
        level="Creepy Castle"
        region={snideInFunkySpot ? "Castle Crypt" : snideInCandySpot ? "Castle Dungeon" : "Creepy Castle Main"}
        inLogic={hasSnide && (snideInFunkySpot ? inStage.in && hasClimbing : inStage.in)}
        outLogic={hasSnide && inStage.out}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  return <ShopPool><Vanilla /></ShopPool>
}

export default ShopLocations
