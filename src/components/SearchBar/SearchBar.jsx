import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from "./SearchBar.module.css";

// const notify = () => toast("Wow so easy!");

function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (!values.query) return toast.error("Type something in");

        onSearch(values.query);

        actions.resetForm();
      }}
    >
      <Form className={css.bar}>
        <div className={css["search-container"]}>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </div>
        <ToastContainer />
      </Form>
    </Formik>
  );
}

export default SearchBar;
