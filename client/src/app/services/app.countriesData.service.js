export default class CountriesDataService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getAll() {
    const getAllEndpoint = `http://localhost:3030/api/countries`;
    const deferred = this.$q.defer();

    this.$http
      .get(getAllEndpoint)
      .then(({ data: countries }) => deferred.resolve(countries))
      .catch(deferred.reject);

    return deferred.promise;
  }
}
