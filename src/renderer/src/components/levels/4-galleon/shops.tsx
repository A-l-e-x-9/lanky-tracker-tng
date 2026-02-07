import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import {
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { useCranky, whatAFunky, useCandy, useSnide } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const highTide = useGalleonHighTide()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useSnide()
  const [crankyFunky, crankyCandy, crankySnide] = useDonkStore(useShallow((state) => [state.shuffledGalleonCranky.galleonCrankyFunky, state.shuffledGalleonCranky.galleonCrankyCandy, state.shuffledFactoryCranky.galleonCrankySnide]))
  const [funkyCranky, funkySnide] = useDonkStore(useShallow((state) => [state.shuffledGalleonFunky.galleonFunkyCranky, state.shuffledGalleonFunky.factoryFunkySnide]))
  const [candyCranky, candySnide] = useDonkStore(useShallow((state) => [state.shuffledGalleonCandy.galleonCandyFunky, state.shuffledGalleonCandy.galleonCandySnide]))
  const [snideCranky, snideFunky, snideCandy] = useDonkStore(useShallow((state) => [state.shuffledGalleonSnide.galleonSnideCranky, state.shuffledGalleonSnide.galleonSnideFunky, state.shuffledGalleonSnide.factorySnideCandy]))
  return (
    <>
      <ShopGenerator
        baseId={4110}
        baseName="Galleon Cranky"
        level="Gloomy Galleon"
        region="Shops"
        inLogic={hasCranky && ((crankyFunky || crankyCandy) ? outskirts.in : crankySnide ? lighthouseArea.in && highTide.in : inStage.in)}
        outLogic={hasCranky && ((crankyFunky || crankyCandy) ? outskirts.out : crankySnide ? lighthouseArea.out : inStage.out)}
      />
      <ShopGenerator
        baseId={4120}
        baseName="Galleon Funky"
        level="Gloomy Galleon"
        region="Shops"
        inLogic={hasFunky && (funkyCranky ? inStage.in : funkySnide ? lighthouseArea.in && highTide.in : outskirts.in)}
        outLogic={hasFunky && (funkyCranky ? inStage.out : funkySnide ? lighthouseArea.out : outskirts.out)}
      />
      <ShopGenerator
        baseId={4130}
        baseName="Galleon Candy"
        level="Gloomy Galleon"
        region="Shops"
        inLogic={hasCandy && (candyCranky ? inStage.in : candySnide ? lighthouseArea.in && highTide.in : outskirts.in)}
        outLogic={hasCandy && (candyCranky ? inStage.out : candySnide ? lighthouseArea.out : outskirts.out)}
      />
      <ShopGenerator
        baseId={4140}
        baseName="Turn in Galleon Blueprint for"
        level="Gloomy Galleon"
        region="Shops"
        inLogic={hasSnide && (snideCranky ? inStage.in : (snideFunky || snideCandy) ? outskirts.in : lighthouseArea.in && highTide.in)}
        outLogic={hasSnide && (snideCranky ? inStage.out : (snideFunky || snideCandy) ? outskirts.out : lighthouseArea.out)}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  return <ShopPool><Vanilla /></ShopPool>
}

export default ShopLocations
