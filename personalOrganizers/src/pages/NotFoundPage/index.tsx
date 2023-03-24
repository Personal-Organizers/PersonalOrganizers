import { StyleNotFoundPage } from "./style";
import notFound from "../../assets/notFound.png";

export const PageNotFound = () => (
  <StyleNotFoundPage>
    <img src={notFound} alt="404 error" />
    <h1>404 Error Page Not Found</h1>
  </StyleNotFoundPage>
);
