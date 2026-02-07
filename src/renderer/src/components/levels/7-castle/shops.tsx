import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ShopGenerator from '@renderer/components/pools/ShopGenerator'
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
  const inFunkySpot = useDonkStore(useShallow((state) => [state.shuffledCastleCranky.castleCrankyFunky || state.shuffledCastleFunky.castleFunkyNoSwitch || state.shuffledCastleCandy.castleCandyFunky || state.shuffledCastleSnide.castleSnideFunky]))
  return (
    <>
      <ShopGenerator
        baseId={7110}
        baseName="Castle Cranky"
        level="Creepy Castle"
        region="Shops"
        inLogic={hasCranky && (inFunkySpot ? inStage.in && hasClimbing : inStage.in)}
        outLogic={hasCranky && inStage.out}
      />
      <ShopGenerator
        baseId={7120}
        baseName="Castle Funky"
        level="Creepy Castle"
        region="Shops"
        inLogic={hasFunky && (!inFunkySpot ? inStage.in : inStage.in && hasClimbing)}
        outLogic={hasFunky && inStage.out}
      />
      <ShopGenerator
        baseId={7130}
        baseName="Castle Candy"
        level="Creepy Castle"
        region="Shops"
        inLogic={hasCandy && (inFunkySpot ? inStage.in && hasClimbing : inStage.in)}
        outLogic={hasCandy && inStage.out}
      />
      <ShopGenerator
        baseId={7140}
        baseName="Turn in Castle Blueprint for"
        level="Creepy Castle"
        region="Shops"
        inLogic={hasSnide && (inFunkySpot ? inStage.in && hasClimbing : inStage.in)}
        outLogic={hasSnide && inStage.out}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  return <ShopPool><Vanilla /></ShopPool>
}

export default ShopLocations
