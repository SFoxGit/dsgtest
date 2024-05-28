import Modal from '@mui/material/Modal'
import BorderContainer from '../../border-container/border-container'
import {
  StyledContainer,
  InnerModal,
  CloseButton,
} from '../random-save/save-modal-style'
import { StyledText, StyledBodyContent, CloseRow } from './usage-modal.style'

const UsageModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} hideBackdrop disableAutoFocus>
      <StyledContainer>
        <BorderContainer>
          <InnerModal>
            <CloseRow>
              <CloseButton onClick={onClose} />
            </CloseRow>
            <StyledBodyContent>
              <StyledText>
                Crafting your virtual world has never been easier with Dungeon
                Sprite. Our collection boasts over 1,000 pixel-art assets,
                perfect for populating your tabletop adventures. Whether youre
                crafting a legendary hero for your player characters or adding
                depth to a simple barkeep, Dungeon Sprite empowers you to create
                memorable moments in every campaign.
              </StyledText>
              <StyledText>
                Our sprites are freely accessible for non-commercial endeavors.
                If you’d like to utilize our artwork for campaigns, video games
                or other commercial pursuits, kindly email us to discuss your
                project and licensing arrangements. By using Dungeon Sprite, you
                agree not to publicly use our artwork without explicit prior
                consent; if you’re including Dungeon Sprite artwork in freely
                available projects, we’d just ask for a credit and a link
                somewhere in there.
              </StyledText>
              <StyledText>
                For additional resources including a beginners guide, FAQs, and
                a community of like-minded creators, we invite you to join our
                Discord server. Stay informed of updates and exclusive features
                by visiting our Patreon page.
              </StyledText>
              <StyledText>
                Dungeon Sprite was created by Shawn Fox and Fredrick Arnold, but
                wouldn’t exist without the extensive inspiration from Eli, Jake,
                Jon, Meagan and Rob. Fredrick also wants to thank his lost
                companion Lucinda, who’s compassion and warmth is felt in
                everything he touches. Pink dreams, Lucy Muffin.
              </StyledText>
            </StyledBodyContent>
          </InnerModal>
        </BorderContainer>
      </StyledContainer>
    </Modal>
  )
}

export default UsageModal
