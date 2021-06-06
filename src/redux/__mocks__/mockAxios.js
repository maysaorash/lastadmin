import MockAdapter from "axios-mock-adapter";
import mockAuth from "../../app/modules/Auth/__mocks__/mockAuth";
import mockCustomers from "../../app/modules/ECommerce/__mocks__/mockCustomer";
// import { Rating } from "../../_metronic/_partials/rating/Rating";

import mockProducts from "../../app/modules/ECommerce/__mocks__/mockProduct";
import mockRemarks from "../../app/modules/ECommerce/__mocks__/mockRemark";
import mockSpecifications from "../../app/modules/ECommerce/__mocks__/mockSpecification";
import { Rating } from "../../_metronic/_partials";

export default function mockAxios(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });

  mockAuth(mock);
  mockCustomers(mock);
  // Rating(mock);
  mockProducts(mock);
  mockRemarks(mock);
  mockSpecifications(mock);

  return mock;
}
