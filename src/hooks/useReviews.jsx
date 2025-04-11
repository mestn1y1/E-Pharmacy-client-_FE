import { useSelector } from "react-redux";
import { selectReviews, selectIsLoading } from "../redux/reviews/selectors";

export const useReviews = () => {
  const isLoading = useSelector(selectIsLoading);
  const reviews = useSelector(selectReviews);

  return {
    isLoading,
    reviews,
  };
};
