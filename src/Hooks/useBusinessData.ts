import { useQuery } from "react-query";
import { fetchBusinessListData } from "../Service";

interface Props {
  id?: string;
  searchCity?: string;
}

const useBusinessData = ({ id, searchCity }: Props = {}) => {
  let { data, isLoading } = useQuery(
    "ListData",
    () => fetchBusinessListData(),
    { refetchOnMount: false }
  );

  if (id) {
    data = data?.filter((entry) => {
      return entry.id === id;
    });
  }

  if (searchCity) {
    data = data?.filter((entry) => {
      return entry.address.city === searchCity;
    });
  }

  return {
    data: data ? data : [],
    isLoading,
  };
};

export default useBusinessData;
