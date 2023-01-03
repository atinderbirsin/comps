import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const onButtonClick = () => {
    setShowModal(!showModal);
  };

  const onDismiss = () => {
    setShowModal(false);
  };

  const action = (
    <Button onClick={onDismiss} primary>
      I Agree
    </Button>
  );

  const modal = (
    <Modal onDismiss={onDismiss} action={action}>
      I"m a Modal , Agree to terms and conditions to continue
    </Modal>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        ullamcorper mi. Aenean lobortis lectus neque, et sodales enim dapibus
        non. Phasellus et placerat purus. Duis hendrerit, mauris et lobortis
        venenatis, libero felis varius ante, et efficitur mauris ex feugiat mi.
        Pellentesque laoreet diam mi, et dignissim quam ultricies nec. Sed
        aliquet varius tellus, in faucibus risus tristique nec. Nam faucibus,
        arcu id molestie viverra, erat nibh mollis ante, convallis congue tellus
        turpis sit amet massa. Nunc euismod dignissim sapien, a tempor ligula
        cursus a.
      </p>

      <Button primary onClick={onButtonClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
