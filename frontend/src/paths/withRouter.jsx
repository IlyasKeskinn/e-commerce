import { useParams} from "react-router-dom";

export const withRouter = Component => (props) => {
    const {id} = useParams();
  return <Component {...props} {...{ id}} />;
};

