import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import SimpleRadioIcon from './SimpleRadioIcon'
import dkPortalIcon from '../../assets/images/dk-portal.png'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#200040',
    color: '#ffffff'
  }
}

const ShuffledDKPortals: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const [setJapesPortal, setAztecPortal, setFactoryPortal, setCavesPortal, setCastlePortal] = useDonkStore(useShallow((state) => [state.setJapesPortal, state.setAztecPortal, state.setFactoryPortal, state.setCavesPortal, state.setCastlePortal]))
  const portalShuffler = useDonkStore(useShallow((state) => state.settings.shuffleDKPortals)) ? '' : 'portal-shuffler'

  return (
    <span>
      <span className={`${portalShuffler}`} onClick={openModal} title="Click to open the DK Portal Shuffler.">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="DK Portal Shuffler"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>DK Portal Shuffler</h2>
          <section className="pool">
            <h3>Jungle Japes</h3>
            <>
            <p>Vanilla/any location not listed</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at its vanilla location or anywhere that wouldn't affect what checks you can do."
                storeKey="vanilla"
                prefix="shuffledJapesPortals"
                updateItem={setJapesPortal}
            />
            <p>Near Diddy's prison</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at the peak of the Japes Highlands."
                storeKey="portalNearDiddy"
                prefix="shuffledJapesPortals"
                updateItem={setJapesPortal}
            />
            <p>In Diddy's mine</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is inside Diddy's mine at the peak of the Japes Highlands."
                storeKey="portalInDiddyMine"
                prefix="shuffledJapesPortals"
                updateItem={setJapesPortal}
            />
            <p>In the Stormy Area</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is in the Stormy Zone or the cave leading to it."
                storeKey="stormyPortal"
                prefix="shuffledJapesPortals"
                updateItem={setJapesPortal}
            />
            </>
            <h3>Angry Aztec</h3>
            <>
            <p>Vanilla/any location not listed</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at its vanilla location or anywhere that wouldn't affect what checks you can do."
                storeKey="vanilla"
                prefix="shuffledAztecPortals"
                updateItem={setAztecPortal}
            />
            <p>Anywhere in the first half of the level</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is anywhere past the two pits of quicksand needing Vines or Ponytail Twirl to get past."
                storeKey="firstHalfPortal"
                prefix="shuffledAztecPortals"
                updateItem={setAztecPortal}
            />
            <p>Anywhere in the second half of the level or the cave leading to it</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is past the gate requiring Guitar to open."
                storeKey="secondHalfPortal"
                prefix="shuffledAztecPortals"
                updateItem={setAztecPortal}
            />
            <p>Inside the Llama Temple</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is inside the Llama Temple, except for any area further gated (the Lava Pedestals, Match Game, etc.)."
                storeKey="llamaPortal"
                prefix="shuffledAztecPortals"
                updateItem={setAztecPortal}
            />
            </>
            <h3>Frantic Factory</h3>
            <>
            <p>Vanilla/any location not listed</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at its vanilla location or anywhere that wouldn't affect what checks you can do."
                storeKey="vanilla"
                prefix="shuffledFactoryPortals"
                updateItem={setFactoryPortal}
            />
            <p>The R&D Room</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is in the R&D Room or the two hatches leading in/out of it."
                storeKey="portalInRAndD"
                prefix="shuffledFactoryPortals"
                updateItem={setFactoryPortal}
            />
            <p>Storage or lower Prod Room</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is in the lowest level."
                storeKey="storagePortal"
                prefix="shuffledFactoryPortals"
                updateItem={setFactoryPortal}
            />
            </>
            <h3>Gloomy Galleon</h3>
            <p className="full-grid">Coming Soon™.</p>
            <h3>Fungi Forest</h3>
            <p className="full-grid">Coming Soon™.</p>
            <h3>Crystal Caves</h3>
            <>
            <p>Vanilla/any location not listed</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at its vanilla location or anywhere that wouldn't affect what checks you can do."
                storeKey="vanilla"
                prefix="shuffledCavesPortals"
                updateItem={setCavesPortal}
            />
            <p>The big boulder room near Cranky's</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is in the big boulder room."
                storeKey="bigRockPortal"
                prefix="shuffledCavesPortals"
                updateItem={setCavesPortal}
            />
            </>
            <h3>Creepy Castle</h3>
            <>
            <p>Vanilla/any location not listed</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at its vanilla location or anywhere that wouldn't affect what checks you can do."
                storeKey="vanilla"
                prefix="shuffledCastlePortals"
                updateItem={setCastlePortal}
            />
            <p>The Ballroom</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is in Diddy's ballroom."
                storeKey="ballroomPortal"
                prefix="shuffledCastlePortals"
                updateItem={setCastlePortal}
            />
            </>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default ShuffledDKPortals
