import { Field, Form, Formik } from "formik";

import css from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (!values.query) return alert("Type something!");

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
      </Form>
    </Formik>
  );
}

export default SearchBar;
