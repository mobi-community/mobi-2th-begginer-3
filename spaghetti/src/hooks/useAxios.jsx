import { useEffect, useState } from "react";
import axios from "axios";
import { weatherAxiosInfoWithoutBaseDate } from "../store/AxiosInfo";

const useAxios = ([axiosInfo, rerender]) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    await axios
      .request(axiosInfo)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const baseInfo = (axiosInfo) => {
  //   if ("base_date" in axiosInfo.params) {
  //     return weatherAxiosInfoWithoutBaseDate;
  //   }
  //   return axiosInfo;
  // };

  //baseInfo(axiosInfo)

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchData();
    };
    fetchDataAsync();
  }, [rerender]); // axiosInfo를 의존성 배열에 추가

  return { data, error, isLoading };
};

export default useAxios;