import { useQuery } from "react-query";
import { fetchBusinessListData } from "../Service";

const useBusinessData = (id?: string) => {
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

  return {
    data: data ? data : [],
    isLoading,
  };
};

export default useBusinessData;
