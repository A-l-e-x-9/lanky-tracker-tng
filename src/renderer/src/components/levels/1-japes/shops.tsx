import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useJapesKongGates, usePlayJapes } from '@renderer/hooks/japes'
import { useShuffledShops, useBananaportAll } from '@renderer/hooks/settings'
import { useCranky, whatAFunky, useSnide, useClimbing } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const playJapes = usePlayJapes()
  const kongGates = useJapesKongGates()
  const climbing = useClimbing()
  const bananaport = useBananaportAll()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasSnide = useSnide()

  return (
    <>
      <ShopGenerator
        baseId={1110}
        baseName="Japes Cranky"
        level="Jungle Japes"
        region="Shops"
        inLogic={kongGates.in && hasCranky}
        outLogic={kongGates.out && hasCranky}
      />
      <ShopGenerator
        baseId={1120}
        baseName="Japes Funky"
        level="Jungle Japes"
        region="Shops"
        inLogic={playJapes.in && (climbing || bananaport) && hasFunky}
        outLogic={playJapes.out && hasFunky}
      />
      <ShopGenerator
        baseId={1140}
        baseName="Turn in Japes Blueprint for"
        level="Jungle Japes"
        region="Shops"
        inLogic={playJapes.in && (climbing || bananaport) && hasSnide}
        outLogic={playJapes.out && hasSnide}
      />

    </>
  )
}

const Shuffled: React.FC = () => {
  const kongGates = useJapesKongGates()
  const climbing = useClimbing()
  const bananaport = useBananaportAll()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasSnide = useSnide()

  return (
    <>
      <ShopGenerator
        baseId={1140}
        baseName="Japes Cranky Location"
        level="Jungle Japes"
        region="Shops"
        inLogic={hasCranky && (kongGates.in || (climbing || bananaport))}
        outLogic={hasCranky && kongGates.out}
      />
      <ShopGenerator
        baseId={1150}
        baseName="Japes Funky Location"
        level="Jungle Japes"
        region="Shops"
        inLogic={hasFunky && (kongGates.in || (climbing || bananaport))}
        outLogic={hasFunky && kongGates.out}
      />
      <ShopGenerator
        baseId={1170}
        baseName="Japes Snide Location"
        level="Jungle Japes"
        region="Shops"
        inLogic={hasSnide && (kongGates.in || (climbing || bananaport))}
        outLogic={hasSnide && kongGates.out}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
