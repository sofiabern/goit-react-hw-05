import { useSearchParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  return (
    <Formik
      initialValues={{ query: query }}
      onSubmit={(values, actions) => {
        
        if (!values.query) return toast.error("Type something in.");

        setSearchParams({query: values.query})

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
