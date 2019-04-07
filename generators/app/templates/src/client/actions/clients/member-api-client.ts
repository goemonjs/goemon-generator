import { doGet } from '../../../base/utilities/network';

export default class MemberApiClient {

  constructor(
    private baseUrl: string
  ) {
  }

  public async getUserProfile() {
    type RESULT_TYPE = {
      id: string,
      email: string
    };
    return await doGet<RESULT_TYPE>(this.baseUrl + '/api/me');
  }
}
