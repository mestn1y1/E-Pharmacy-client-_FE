import { useSelector } from "react-redux";
import { selectNearest, selectIsLoading } from "../redux/nearest/selectors";

export const useNearest = () => {
  const isLoading = useSelector(selectIsLoading);
  const nearest = useSelector(selectNearest);

  return {
    isLoading,
    nearest,
  };
};
