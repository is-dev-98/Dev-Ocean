import { Business } from "../Types";

class BusinessData {
  public data: Business[] = [];
  constructor(rawData: Business[]) {
    rawData.forEach((entry) => {
      this.data.push(entry);
    });
  }
}

export default BusinessData;
