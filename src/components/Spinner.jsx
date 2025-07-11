import { PropagateLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <PropagateLoader
      color="#3b82f6"
      size={20}
      cssOverride={{ margin: "0 auto", textAlign: "center" }}
      loading={loading}
    />
  );
};
export default Spinner;
