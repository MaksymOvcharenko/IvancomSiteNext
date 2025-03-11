import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import styles from "./StatusMessage.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { CiWarning } from "react-icons/ci";
import SvgIcon from "../SvgIcon";
import Link from "next/link";
interface StatusMessageProps {
  isLoading: boolean;
  sendStatus: "success" | "error" | null;
    onSubmit: () => void;
    changeStep: () => void;
}

const StatusMessage: React.FC<StatusMessageProps> = ({
  isLoading,
  sendStatus,
    onSubmit,
  changeStep,
}) => {
  const t = useTranslations("FormInfo");
  return (
    <div className={styles.body}>
      {isLoading ? (
        <div className="flex items-center space-x-2 text-blue-500 animate-spin">
          <ClipLoader color="#2a00ff" size={120} />
        </div>
      ) : sendStatus === "success" ? (
        <div className={styles.error}>
            <div className="flex items-center space-x-2 text-green-500">
              <FaRegCalendarCheck  size={96} color="#1d802a"/>
              <p className={styles.errorTitle}>{t("greeting")}</p>
              <p className={styles.errorDescr}>{t("order_success")}</p>
                      </div>
                      <div className={styles.errBtn}>
            <button
              className={styles.errCont}
              onClick={changeStep}
            >
              {t("add_shipment")}
            </button>
                          <Link
                              href="https://ivancom.eu"
               className={styles.errSend}
              
            >
                                  {t("home")}
                                  <SvgIcon name="sparow" />
            </Link>
          </div>
        </div>
      ) : sendStatus === "error" ? (
        <div className={styles.error}>
          <div className="flex items-center space-x-2">
            <CiWarning size={96} color="#993225" />
            <p className={styles.errorTitle}>{t("error_title")}</p>
            <p className={styles.errorDescr}>{t("error_message")}</p>
          </div>
          <div className={styles.errBtn}>
            <button
              className={styles.errCont}
              onClick={onSubmit}
            >
              {t("contacts")}
            </button>
            <button
               className={styles.errSend}
              onClick={onSubmit}
            >
                                  {t("try_again")}
                                  <SvgIcon name="sparow" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StatusMessage;
