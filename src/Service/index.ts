import axios from "axios";
import BusinessData from "./mapper";
import { Business } from "../Types";
import { API_END_POINT } from "./constants";
import { dataFallback } from "./data";

export const fetchBusinessListData = async (): Promise<Business[]> => {
  try {
    const { data } = await axios.get(API_END_POINT);

    if (typeof data === "undefined") {
      return new BusinessData(dataFallback).data;
    }
    return new BusinessData(data).data;
  } catch (e) {
    return new BusinessData(dataFallback).data;
  }
};
