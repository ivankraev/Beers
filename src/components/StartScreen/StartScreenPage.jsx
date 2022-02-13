import { Button, Spinner } from "react-bootstrap";
import { useState, useContext } from "react";
import { FavouritesContext } from "../../Contexts/FavouritesContext";
import ErrorMessage from "../common/MetaMaskTransaction/ErrorMessage";
import styles from "./StartScreenPage.module.css";
function StartScreenPage({ setIsConnected }) {
  const [error, setError] = useState("");
  const { setNotificationMessage, setNotifications } =
    useContext(FavouritesContext);

  const { ethereum } = window;
  const submitHandler = async () => {
    if (!ethereum) {
      setError({ message: "You need MetaMask extention" });
    } else {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(changeAccountHandler)
        .catch(setError);
    }
  };
  const changeAccountHandler = (acc) => {
    acc[0] ? connectHandler(acc) : disconnectHandler();
  };

  const connectHandler = () => {
    setIsConnected(true);
    setNotificationMessage("Connected");
    setNotifications(true);
    setError("");
  };
  const disconnectHandler = () => {
    setIsConnected(false);
  };

  ethereum && ethereum.on("accountsChanged", changeAccountHandler);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Button
            className="btn btn-primary btn-lg btn-block"
            data-toggle="tooltip"
            title="If the dialog doesnt'n show up, please refresh the page and try again."
            tabindex="0"
            onClick={submitHandler}
          >
            <span>Connect your MetaMask Wallet to continue</span>
          </Button>
          <div className="w-full  bg-white rounded-md mt-3">
            <ErrorMessage message={error.message} />
          </div>
        </div>
      </div>
    </>
  );
}
export default StartScreenPage;
