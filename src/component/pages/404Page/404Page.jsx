import "./404Page.scss";
import ErrorMassage from "../../error/ErrorMassage";

const Page404 = () => {
  return (
    <>
      <ErrorMassage>
        <div className="not-found">
          <h4>страница не найдена</h4>
        </div>
      </ErrorMassage>
    </>
  );
};

export default Page404;
