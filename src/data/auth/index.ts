import axios from "axios";

export interface Companies {
  abbreviation: string;
  name: string;
}

export default class AuthService {
  public async getCompanyByConsonant(
    consonant: string
  ): Promise<Array<Companies>> {
    const result = await axios.get(
      `http://localhost:8080/company/abbreviation/${consonant}`
    );
    return result.data;
  }
}
