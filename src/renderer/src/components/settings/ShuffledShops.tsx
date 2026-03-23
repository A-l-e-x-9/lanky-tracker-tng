import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import crankyIcon from '../../assets/images/cranky.png'
import unknownIcon from '../../assets/images/unknown-small.png'
import funkyIcon from '../../assets/images/settings/funky.png'
import snideIcon from '../../assets/images/snide.png'
import candyIcon from '../../assets/images/candy.png'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#400020',
    color: '#ffffff'
  }
}

const ShuffledShops: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [setIslesShops, setJapesCranky, setJapesFunky, setJapesSnide, setAztecCranky, setAztecFunky, setAztecCandy, setAztecSnide, setFactoryCranky, setFactoryFunky, setFactoryCandy, setFactorySnide, setGalleonCranky, setGalleonFunky, setGalleonCandy, setGalleonSnide, setForestCranky, setForestFunky, setForestSnide, setCavesCranky, setCavesFunky, setCavesCandy, setCavesSnide, setCastleCranky, setCastleFunky, setCastleCandy, setCastleSnide] = useDonkStore(
    useShallow((state) => [state.setIslesShops, state.setJapesCranky, state.setJapesFunky, state.setJapesSnide, state.setAztecCranky, state.setAztecFunky, state.setAztecCandy, state.setAztecSnide, state.setFactoryCranky, state.setFactoryFunky, state.setFactoryCandy, state.setFactorySnide, state.setGalleonCranky, state.setGalleonFunky, state.setGalleonCandy, state.setGalleonSnide, state.setForestCranky, state.setForestFunky, state.setForestSnide, state.setCavesCranky, state.setCavesFunky, state.setCavesCandy, state.setCavesSnide, state.setCastleCranky, state.setCastleFunky, state.setCastleCandy, state.setCastleSnide])
  )
  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const shopShuffler = useDonkStore(useShallow((state) => state.settings.shuffleShops)) ? '' : 'shop-shuffler'

  return (
    <>
      <span className={`${shopShuffler}`} onClick={openModal} title="Click to open the Shop Shuffler.">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Shop Shuffler"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>Shop Shuffler</h2>
          <section className="pool">
            <>
            <p></p>
            <p></p>
            <p>Are Cranky and Snide switched in Isles?</p>
              <SimpleIcon
                imgUrl={unknownIcon}
                title="Well, are they?"
                storeKey="islesSwitchUp"
                prefix="shuffledIslesShops"
                updateItem={setIslesShops}
              />
            <p></p>
            <p></p>
            <p className="full-grid">Jungle Japes:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="japesCrankyNoSwitch"
                prefix="shuffledJapesCranky"
                updateItem={setJapesCranky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="japesCrankyFunky"
                prefix="shuffledJapesCranky"
                updateItem={setJapesCranky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="japesCrankySnide"
                prefix="shuffledJapesCranky"
                updateItem={setJapesCranky}
            />
            <p></p>
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="japesFunkyCranky"
                prefix="shuffledJapesFunky"
                updateItem={setJapesFunky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="japesFunkyNoSwitch"
                prefix="shuffledJapesFunky"
                updateItem={setJapesFunky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="japesFunkySnide"
                prefix="shuffledJapesFunky"
                updateItem={setJapesFunky}
            />
            <p></p>
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="japesSnideCranky"
                prefix="shuffledJapesSnide"
                updateItem={setJapesSnide}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="japesSnideFunky"
                prefix="shuffledJapesSnide"
                updateItem={setJapesSnide}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="japesSnideNoSwitch"
                prefix="shuffledJapesSnide"
                updateItem={setJapesSnide}
            />
            <p></p>
            <p></p>
            <p className="full-grid">Angry Aztec:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="aztecCrankyNoSwitch"
                prefix="shuffledAztecCranky"
                updateItem={setAztecCranky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="aztecCrankyFunky"
                prefix="shuffledAztecCranky"
                updateItem={setAztecCranky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="aztecCrankyCandy"
                prefix="shuffledAztecCranky"
                updateItem={setAztecCranky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="aztecCrankySnide"
                prefix="shuffledAztecCranky"
                updateItem={setAztecCranky}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="aztecFunkyCranky"
                prefix="shuffledAztecFunky"
                updateItem={setAztecFunky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="aztecFunkyNoSwitch"
                prefix="shuffledAztecFunky"
                updateItem={setAztecFunky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="aztecFunkyCandy"
                prefix="shuffledAztecFunky"
                updateItem={setAztecFunky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="aztecFunkySnide"
                prefix="shuffledAztecFunky"
                updateItem={setAztecFunky}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="aztecCandyCranky"
                prefix="shuffledAztecCandy"
                updateItem={setAztecCandy}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="aztecCandyFunky"
                prefix="shuffledAztecCandy"
                updateItem={setAztecCandy}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="aztecCandyNoSwitch"
                prefix="shuffledAztecCandy"
                updateItem={setAztecCandy}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="aztecCandySnide"
                prefix="shuffledAztecCandy"
                updateItem={setAztecCandy}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="aztecSnideCranky"
                prefix="shuffledAztecSnide"
                updateItem={setAztecSnide}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="aztecSnideFunky"
                prefix="shuffledAztecSnide"
                updateItem={setAztecSnide}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="aztecSnideCandy"
                prefix="shuffledAztecSnide"
                updateItem={setAztecSnide}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="aztecSnideNoSwitch"
                prefix="shuffledAztecSnide"
                updateItem={setAztecSnide}
            />
            <p></p>
            <p className="full-grid">Frantic Factory:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="factoryCrankyNoSwitch"
                prefix="shuffledFactoryCranky"
                updateItem={setFactoryCranky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="factoryCrankyFunky"
                prefix="shuffledFactoryCranky"
                updateItem={setFactoryCranky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="factoryCrankyCandy"
                prefix="shuffledFactoryCranky"
                updateItem={setFactoryCranky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="factoryCrankySnide"
                prefix="shuffledFactoryCranky"
                updateItem={setFactoryCranky}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="factoryFunkyCranky"
                prefix="shuffledFactoryFunky"
                updateItem={setFactoryFunky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="factoryFunkyNoSwitch"
                prefix="shuffledFactoryFunky"
                updateItem={setFactoryFunky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="factoryFunkyCandy"
                prefix="shuffledFactoryFunky"
                updateItem={setFactoryFunky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="factoryFunkySnide"
                prefix="shuffledFactoryFunky"
                updateItem={setFactoryFunky}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="factoryCandyCranky"
                prefix="shuffledFactoryCandy"
                updateItem={setFactoryCandy}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="factoryCandyFunky"
                prefix="shuffledFactoryCandy"
                updateItem={setFactoryCandy}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="factoryCandyNoSwitch"
                prefix="shuffledFactoryCandy"
                updateItem={setFactoryCandy}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="factoryCandySnide"
                prefix="shuffledFactoryCandy"
                updateItem={setFactoryCandy}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="factorySnideCranky"
                prefix="shuffledFactorySnide"
                updateItem={setFactorySnide}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="factorySnideFunky"
                prefix="shuffledFactorySnide"
                updateItem={setFactorySnide}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="factorySnideCandy"
                prefix="shuffledFactorySnide"
                updateItem={setFactorySnide}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="factorySnideNoSwitch"
                prefix="shuffledFactorySnide"
                updateItem={setFactorySnide}
            />
            <p></p>
            <p className="full-grid">Gloomy Galleon:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="galleonCrankyNoSwitch"
                prefix="shuffledGalleonCranky"
                updateItem={setGalleonCranky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="galleonCrankyFunky"
                prefix="shuffledGalleonCranky"
                updateItem={setGalleonCranky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="galleonCrankyCandy"
                prefix="shuffledGalleonCranky"
                updateItem={setGalleonCranky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="galleonCrankySnide"
                prefix="shuffledGalleonCranky"
                updateItem={setGalleonCranky}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="galleonFunkyCranky"
                prefix="shuffledGalleonFunky"
                updateItem={setGalleonFunky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="galleonFunkyNoSwitch"
                prefix="shuffledGalleonFunky"
                updateItem={setGalleonFunky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="galleonFunkyCandy"
                prefix="shuffledGalleonFunky"
                updateItem={setGalleonFunky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="galleonFunkySnide"
                prefix="shuffledGalleonFunky"
                updateItem={setGalleonFunky}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="galleonCandyCranky"
                prefix="shuffledGalleonCandy"
                updateItem={setGalleonCandy}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="galleonCandyFunky"
                prefix="shuffledGalleonCandy"
                updateItem={setGalleonCandy}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="galleonCandyNoSwitch"
                prefix="shuffledGalleonCandy"
                updateItem={setGalleonCandy}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="galleonCandySnide"
                prefix="shuffledGalleonCandy"
                updateItem={setGalleonCandy}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="galleonSnideCranky"
                prefix="shuffledGalleonSnide"
                updateItem={setGalleonSnide}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="galleonSnideFunky"
                prefix="shuffledGalleonSnide"
                updateItem={setGalleonSnide}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="galleonSnideCandy"
                prefix="shuffledGalleonSnide"
                updateItem={setGalleonSnide}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="galleonSnideNoSwitch"
                prefix="shuffledGalleonSnide"
                updateItem={setGalleonSnide}
            />
            <p></p>
            <p className="full-grid">Fungi Forest:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="forestCrankyNoSwitch"
                prefix="shuffledForestCranky"
                updateItem={setForestCranky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="forestCrankyFunky"
                prefix="shuffledForestCranky"
                updateItem={setForestCranky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="forestCrankySnide"
                prefix="shuffledForestCranky"
                updateItem={setForestCranky}
            />
            <p></p>
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="forestFunkyCranky"
                prefix="shuffledForestFunky"
                updateItem={setForestFunky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="forestFunkyNoSwitch"
                prefix="shuffledForestFunky"
                updateItem={setForestFunky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="forestFunkySnide"
                prefix="shuffledForestFunky"
                updateItem={setForestFunky}
            />
            <p></p>
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="forestSnideCranky"
                prefix="shuffledForestSnide"
                updateItem={setForestSnide}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="forestSnideFunky"
                prefix="shuffledForestSnide"
                updateItem={setForestSnide}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="forestSnideNoSwitch"
                prefix="shuffledForestSnide"
                updateItem={setForestSnide}
            />
            <p></p>
            <p></p>
            <p className="full-grid">Crystal Caves:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="cavesCrankyNoSwitch"
                prefix="shuffledCavesCranky"
                updateItem={setCavesCranky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="cavesCrankyFunky"
                prefix="shuffledCavesCranky"
                updateItem={setCavesCranky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="cavesCrankyCandy"
                prefix="shuffledCavesCranky"
                updateItem={setCavesCranky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="cavesCrankySnide"
                prefix="shuffledCavesCranky"
                updateItem={setCavesCranky}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="cavesFunkyCranky"
                prefix="shuffledCavesFunky"
                updateItem={setCavesFunky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="cavesFunkyNoSwitch"
                prefix="shuffledCavesFunky"
                updateItem={setCavesFunky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="cavesFunkyCandy"
                prefix="shuffledCavesFunky"
                updateItem={setCavesFunky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="cavesFunkySnide"
                prefix="shuffledCavesFunky"
                updateItem={setCavesFunky}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="cavesCandyCranky"
                prefix="shuffledCavesCandy"
                updateItem={setCavesCandy}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="cavesCandyFunky"
                prefix="shuffledCavesCandy"
                updateItem={setCavesCandy}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="cavesCandyNoSwitch"
                prefix="shuffledCavesCandy"
                updateItem={setCavesCandy}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="cavesCandySnide"
                prefix="shuffledCavesCandy"
                updateItem={setCavesCandy}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="cavesSnideCranky"
                prefix="shuffledCavesSnide"
                updateItem={setCavesSnide}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="cavesSnideFunky"
                prefix="shuffledCavesSnide"
                updateItem={setCavesSnide}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="cavesSnideCandy"
                prefix="shuffledCavesSnide"
                updateItem={setCavesSnide}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="cavesSnideNoSwitch"
                prefix="shuffledCavesSnide"
                updateItem={setCavesSnide}
            />
            <p></p>
            <p className="full-grid">Creepy Castle:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="castleCrankyNoSwitch"
                prefix="shuffledCastleCranky"
                updateItem={setCastleCranky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="castleCrankyFunky"
                prefix="shuffledCastleCranky"
                updateItem={setCastleCranky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="castleCrankyCandy"
                prefix="shuffledCastleCranky"
                updateItem={setCastleCranky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="castleCrankySnide"
                prefix="shuffledCastleCranky"
                updateItem={setCastleCranky}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="castleFunkyCranky"
                prefix="shuffledCastleFunky"
                updateItem={setCastleFunky}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="castleFunkyNoSwitch"
                prefix="shuffledCastleFunky"
                updateItem={setCastleFunky}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="castleFunkyCandy"
                prefix="shuffledCastleFunky"
                updateItem={setCastleFunky}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="castleFunkySnide"
                prefix="shuffledCastleFunky"
                updateItem={setCastleFunky}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="castleCandyCranky"
                prefix="shuffledCastleCandy"
                updateItem={setCastleCandy}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="castleCandyFunky"
                prefix="shuffledCastleCandy"
                updateItem={setCastleCandy}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="castleCandyNoSwitch"
                prefix="shuffledCastleCandy"
                updateItem={setCastleCandy}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="castleCandySnide"
                prefix="shuffledCastleCandy"
                updateItem={setCastleCandy}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="castleSnideCranky"
                prefix="shuffledCastleSnide"
                updateItem={setCastleSnide}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="castleSnideFunky"
                prefix="shuffledCastleSnide"
                updateItem={setCastleSnide}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="castleSnideCandy"
                prefix="shuffledCastleSnide"
                updateItem={setCastleSnide}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="castleSnideNoSwitch"
                prefix="shuffledCastleSnide"
                updateItem={setCastleSnide}
            />
            <p></p>
            </>
            </section>
        </section>
      </Modal>
    </>
  )
}

export default ShuffledShops
