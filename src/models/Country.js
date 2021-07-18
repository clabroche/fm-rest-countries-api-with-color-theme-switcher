import api from '../services/api'
class Country {
  constructor(country = {}) {
    /** @type {string} */
    this.alpha2Code = country.alpha2Code
    /** @type {string} */
    this.alpha3Code = country.alpha3Code
    /** @type {string[]} */
    this.altSpellings = country.altSpellings
    /** @type {number} */
    this.area = country.area
    /** @type {string[]} */
    this.borders = country.borders
    /** @type {string[]} */
    this.callingCodes = country.callingCodes
    /** @type {string[]} */
    this.capital = country.capital
    /** @type {string[]} */
    this.cioc = country.cioc
    /** @type {Object[]} */
    this.currencies = country.currencies
    /** @type {string} */
    this.demonym = country.demonym
    /** @type {string} */
    this.flag = country.flag
    /** @type {number} */
    this.gini = country.gini
    /** @type {number} */
    this.languages = country.languages
    /** @type {number} */
    this.latlng = country.latlng
    /** @type {string} */
    this.name = country.name
    /** @type {string} */
    this.nativeName = country.nativeName
    /** @type {string} */
    this.numericCode = country.numericCode
    /** @type {number} */
    this.population = country.population
    /** @type {number} */
    this.region = country.region
    /** @type {Object[]} */
    this.regionalBlocs = country.regionalBlocs
    /** @type {string} */
    this.subregion = country.subregion
    /** @type {string[]} */
    this.timezones = country.timezones
    /** @type {string[]} */
    this.topLevelDomain = country.topLevelDomain
    /** @type {Object[]} */
    this.translations = country.translations
  }
  /** @returns {Promise<Country[]>} */
  static async all() {
    let { data: countries } = await api.get('/all')
    if (!countries?.length) countries = []
    return countries.map(country => new Country(country))
  }
  /** @returns {Promise<Country[]>} */
  static async allByName(name) {
    if (!name) return this.all()
    let { data: countries } = await api.get(`/name/${name}`)
    if (!countries?.length) countries = []
    return countries.map(country => new Country(country))
  }
  /** @returns {Promise<string[]>} */
  static async allRegions() {
    const countries = await this.all()
    return countries
      .map(country => country.region)
      .reduce((_regions, region) => {
        if (region && !_regions.includes(region)) _regions.push(region)
        return _regions
      }, [])
      .sort((a, b) => a.localeCompare(b))
  }
  /** @returns {Promise<Country>} */
  static async get(name) {
    const countries = await this.allByName(name)
    return countries[0]
  }
}

export default Country