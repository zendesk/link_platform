import { RESTDataSource } from "apollo-datasource-rest";

class LocationAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://blomp.localhost:3000";
  }

  async getAllLocations() {
    const response = this.get("locations");
    return Array.isArray(response)
      ? response.map(location => this.locationReducer(location))
      : [];
  }

  async getLocationById({ locationId }) {
    const response = await this.get("location", { id: locationId });
    return this.locationReducer(response[0]);
  }

  getLocationsByIds({ locationIds }) {
    return Promise.all(
      locationIds.map(locationId => this.getLocationById({ locationId }))
    );
  }

  locationReducer(location) {
    return {
      id: location.id,
      name: location.name,
      alternateName: location.alternateName,
      description: location.description,
      transportation: location.transportation,
      latitude: location.latitude,
      longitude: location.longitude,
      linkInstance: {
        id: location.link_instance.id,
        owner: {
          id: location.link_instance.owner.id,
          name: location.link_instance.owner.name,
          nickname: location.link_instance.owner.nickname,
          image: location.link_instance.owner.image,
          email: location.link_instance.owner.email,
          tokens: location.link_instance.owner.tokens
        },
        name: location.link_instance.name,
        subdomain: location.link_instance.subdomain,
        email: location.link_instance.email,
        url: location.link_instance.url
      },
      organization: {
        id: location.organization.id,
        name: location.organization.name,
        alternateName: location.organization.alternateName,
        description: location.organization.description,
        email: location.organization.email,
        url: location.organization.url,
        taxStatus: location.organization.tax_status,
        taxId: location.organization.tax_id,
        yearIncorporated: location.organization.year_incorporated,
        legalStatus: location.organization.legal_status
      }
    };
  }
}

export default LocationAPI;
