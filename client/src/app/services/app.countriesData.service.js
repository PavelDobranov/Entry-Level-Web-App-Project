export default class CountriesDataService {
  constructor($http, $q, apiUrl) {
    this.$http = $http;
    this.$q = $q;
    this.apiUrl = apiUrl;
  }

  getAll() {
    const getAllEndpoint = `${this.apiUrl}/countries`;
    const deferred = this.$q.defer();

    this.$http
      .get(getAllEndpoint)
      .then(({ data: countries }) => deferred.resolve(countries))
      .catch(deferred.reject);

    return deferred.promise;
  }
}
