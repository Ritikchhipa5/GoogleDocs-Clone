import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import Icon from "@material-tailwind/react/Icon";
import DocumentRow from "./DocumentRow";
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection } from "firebase/firestore";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(true);
  const [input, setinput] = useState("");
  const createDocument = () => {
    if (!input) return;

    db.collection("userDocs")
      .doc("ritikchhipa5@gmail.com")
      .collection("docs")
      .add({
        filename: input,
        timestamp: new Date.now(),
      });

    setShowModal(false);
    setinput("");
  };
  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody>
        <input
          value={input}
          onChange={(e) => setinput(e.target.value)}
          type="text"
          className="outline-none w-full"
        />
      </ModalBody>
      <ModalFooter>
        <Button>Cancel</Button>
        <Button onClick={createDocument}>Create</Button>
      </ModalFooter>
    </Modal>
  );
  return (
    <>
      <section className="bg-[#f1f3f4] pb-10 px-10">
        {modal}
        <div className="max-w-3xl mx-auto ">
          <div className="flex justify-between py-6">
            <h1 style={{ color: "#202124" }} className="text-lg">
              Start a New Document
            </h1>
            <Button
              color="#202124"
              buttonType="outline"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="h-10 w-10 border-0 "
            >
              <Icon name="more_vert" size="2xl" />
            </Button>
          </div>
          <div onClick={createDocument}>
            <div className="h-52 w-40 cursor-pointer border-2 rounded-sm hover:border-blue-400 ">
              <img src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png" />
            </div>
            <h4 className="ml-3 mt-3 ">Blank</h4>
          </div>
        </div>
      </section>
      <section className="bg-white px-10 md:px-0 ">
        <div className="max-w-3xl mx-auto py-8">
          <div className="flex justify-between pb-5">
            <h2 className="pl-2 flex-grow font-medium">Last Opened</h2>
            <div className="flex w-2/5 justify-center">
              <p className="mr-12 text-[#414549]">Owned by anyone</p>
              <p className="mr-1 text-[#414549]">Date Created</p>
            </div>
          </div>
          <DocumentRow />
          <DocumentRow />
          <DocumentRow />
          <DocumentRow />
          <DocumentRow />
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
