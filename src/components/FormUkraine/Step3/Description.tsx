import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Description.module.css";
import SvgIcon from "@/components/SvgIcon";
import { useDispatch, useSelector } from "react-redux";
import { setDescriptionData } from "@/store/formUatoWorld";

interface DescriptionProps {
  nextStep: () => void;
  prevStep: () => void;
}

interface FormValues {
  description: string;
  agree: boolean;
  cold: boolean;
}

const DescriptionSchema = Yup.object().shape({
  description: Yup.string()
    .required("Опис посилки є обов’язковим")
    .min(4, "Мінімально 4 символи"),
  agree: Yup.boolean().oneOf([true], "Ви повинні прийняти умови"),
});

const Description: React.FC<DescriptionProps> = ({ nextStep, prevStep }) => {
  const description =
    useSelector((state: any) => state.formUatoWorld.formData.description) || "";
  const initialValues: FormValues = {
    description: description,
    agree: false,
    cold: false,
  };
  const dispatch = useDispatch();
  const handleSubmit = (values: FormValues) => {
    console.log("Submitted Data:", values);
    dispatch(setDescriptionData(values));
    nextStep();
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formContTitle}>Крок 3</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={DescriptionSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles.sender}>
              <h2 className={styles.formContTitle}>Опис посилки</h2>
              <div className={styles.inputCont}>
                <label htmlFor="description" className={styles.label}>
                  Вкажіть опис посилки:
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    rows="4"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className={styles.error}
                  />
                </label>
              </div>
              {/* <div className={styles.fieldWrapper}>
                <label>
                  <Field type="checkbox" name="cold" /> Доставляти в холоді
                </label>
                <ErrorMessage
                  name="cold"
                  component="div"
                  className={styles.error}
                />
              </div> */}
              <div className={styles.fieldWrapper}>
  <label className={styles.labelWithTooltip}>
    <Field type="checkbox" name="cold" /> Температурний режим 2-8 °C. (Для ліків)
    <div className={styles.tooltipWrapper}>
      <span className={styles.questionMark}>?</span>
      <div className={styles.tooltipText}>
      Послуга доступна лише на території Польщі
      </div>
    </div>
  </label>

  <ErrorMessage
    name="cold"
    component="div"
    className={styles.error}
  />
</div>

              <div className={styles.fieldWrapper}>
                <label>
                  <Field type="checkbox" name="agree" /> Я погоджуюсь з обробкою
                  персональних даних
                </label>
                <ErrorMessage
                  name="agree"
                  component="div"
                  className={styles.error}
                />
              </div>
            </div>

            <div className={styles.buttonWrapper}>
              <button
                type="button"
                onClick={prevStep}
                className={styles.button}
              >
                Назад
              </button>
              <button type="submit" className={styles.button}>
                Далі <SvgIcon name="sparow" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Description;
