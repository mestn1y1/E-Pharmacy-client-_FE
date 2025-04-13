import { useSelector } from "react-redux";
import {
  selectSelectedStore,
  selectIsLoading,
  selectError,
  selectStoresList,
} from "../redux/stores/selectors";

export const useStore = () => {
  const stores = useSelector(selectStoresList);
  const selectedStore = useSelector(selectSelectedStore);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    stores,
    selectedStore,
    isLoading,
    error,
  };
};
