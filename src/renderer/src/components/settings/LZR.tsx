import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#004000',
    color: '#ffffff'
  }
}

const LoadingZoneRandomizer: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const [isKeySeed, isKey8Seed, isKey38Seed, isKremKaptureSeed, isRapSeed, isChallengeSeed, isWabbitSeed, isGBSeed, isBPSeed, isCoCoinSeed, isMedalSeed, isCrownSeed, isFairySeed, isRainbowSeed, isBeanSeed, isPearlSeed, isBossSeed, isBonusSeed] = useDonkStore(useShallow((state) => [state.winCondition.bossKeys, state.winCondition.key8, state.winCondition.key3And8, state.winCondition.kremlingKapture, state.winCondition.takeItToTheFridge, state.winCondition.kRoolChallenge, state.winCondition.killTheWabbit, state.winCondition.goldBananas, state.winCondition.blueprints, state.winCondition.companyCoins, state.winCondition.bananaMedals, state.winCondition.crowns, state.winCondition.fairies, state.winCondition.rainbowCoins, state.winCondition.theBean, state.winCondition.pearls, state.winCondition.bosses, state.winCondition.bonuses]))

  const lzrShuffler = useDonkStore(useShallow((state) => state.settings.shuffleLoadingZones)) ? '' : 'lzr-shuffler'

  return (
    <span>
      <span className={`${lzrShuffler}`} onClick={openModal} title="Click to open the Loading Zone Randomizer.">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="LZR Settings"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>Loading Zone Randomizer</h2>
          <section className="pool">
            <p className="full-grid">Coming Soon™.</p>
            <p className="full-grid">And by "soon", I mean "when Satoru Iwata comes back to Nintendo". I absolutely HATE LZR, so this will probably be the last thing I ever do along with shuffling the colored bananas. =_=; If YOU have a solution, why don't you edit this damn thing yourself and make a pull request? -Alex</p>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default LoadingZoneRandomizer
