import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#404000',
    color: '#ffffff'
  }
}

const SlamShuffler: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [setJapesSlam, setAztecSlam, setFactorySlam, setGalleonSlam, setForestSlam, setCavesSlam, setCastleSlam] = useDonkStore(
    useShallow((state) => [state.setJapesSlam, state.setAztecSlam, state.setFactorySlam, state.setGalleonSlam, state.setForestSlam, state.setCavesSlam, state.setCastleSlam]) //Despite spoiler logs giving you a slam level for Hideout Helm, I've chosen to not define Helm here, as I don't think there's anything Slam-locked there. The switch in Chunky's phase of the K. Rool fight, which might seem to some like it would belong with Helm, has its own define in GeneratorSettings.tsx.
  )
  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const slamShuffler = useDonkStore(useShallow((state) => state.settings.progressiveSlams)) ? '' : 'slam-shuffler'

  return (
    <span>
      <span className={`${slamShuffler}`} onClick={openModal} title="Click to open the Progressive Slam Shuffler.">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Progressive Slam Settings"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>Progressive Slam Shuffler</h2>
          <section className="pool">
            <p>Slam level for Jungle Japes:</p>
            <SimpleRadioIcon
                imgUrl={greenSlamIcon}
                title="Simian Slam"
                storeKey="greenSlam"
                prefix="japesSlam"
                updateItem={setJapesSlam}
            />
            <SimpleRadioIcon
                imgUrl={blueSlamIcon}
                title="Super Simian Slam"
                storeKey="blueSlam"
                prefix="japesSlam"
                updateItem={setJapesSlam}
            />
            <SimpleRadioIcon
                imgUrl={redSlamIcon}
                title="Super Duper Simian Slam"
                storeKey="redSlam"
                prefix="japesSlam"
                updateItem={setJapesSlam}
            />
            <p>Slam level for Angry Aztec:</p>
            <SimpleRadioIcon
                imgUrl={greenSlamIcon}
                title="Simian Slam"
                storeKey="greenSlam"
                prefix="aztecSlam"
                updateItem={setAztecSlam}
            />
            <SimpleRadioIcon
                imgUrl={blueSlamIcon}
                title="Super Simian Slam"
                storeKey="blueSlam"
                prefix="aztecSlam"
                updateItem={setAztecSlam}
            />
            <SimpleRadioIcon
                imgUrl={redSlamIcon}
                title="Super Duper Simian Slam"
                storeKey="redSlam"
                prefix="aztecSlam"
                updateItem={setAztecSlam}
            />
            <p>Slam level for Frantic Factory:</p>
            <SimpleRadioIcon
                imgUrl={greenSlamIcon}
                title="Simian Slam"
                storeKey="greenSlam"
                prefix="factorySlam"
                updateItem={setFactorySlam}
            />
            <SimpleRadioIcon
                imgUrl={blueSlamIcon}
                title="Super Simian Slam"
                storeKey="blueSlam"
                prefix="factorySlam"
                updateItem={setFactorySlam}
            />
            <SimpleRadioIcon
                imgUrl={redSlamIcon}
                title="Super Duper Simian Slam"
                storeKey="redSlam"
                prefix="factorySlam"
                updateItem={setFactorySlam}
            />
            <p>Slam level for Gloomy Galleon:</p>
            <SimpleRadioIcon
                imgUrl={greenSlamIcon}
                title="Simian Slam"
                storeKey="greenSlam"
                prefix="galleonSlam"
                updateItem={setGalleonSlam}
            />
            <SimpleRadioIcon
                imgUrl={blueSlamIcon}
                title="Super Simian Slam"
                storeKey="blueSlam"
                prefix="galleonSlam"
                updateItem={setGalleonSlam}
            />
            <SimpleRadioIcon
                imgUrl={redSlamIcon}
                title="Super Duper Simian Slam"
                storeKey="redSlam"
                prefix="galleonSlam"
                updateItem={setGalleonSlam}
            />
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default SlamShuffler
