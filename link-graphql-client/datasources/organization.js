import { RESTDataSource } from "apollo-datasource-rest";

class OrganizationAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://blomp.localhost:3000";
  }

  async getAllOrganizations() {
    const response = this.get("organizations");
    return Array.isArray(response)
      ? response.map(organization => this.organizationReducer(organization))
      : [];
  }

  async getOrganizationById({ organizationId }) {
    const response = await this.get("organization", { id: organizationId });
    return this.organizationReducer(response[0]);
  }

  getOrganizationsByIds({ organizationIds }) {
    return Promise.all(
      organizationIds.map(organizationId =>
        this.getOrganizationById({ organizationId })
      )
    );
  }

  organizationReducer(organization) {
    return {
      id: organization.id,
      linkInstance: {
        id: organization.link_instance.id,
        owner: {
          id: organization.link_instance.owner.id,
          name: organization.link_instance.owner.name,
          nickname: organization.link_instance.owner.nickname,
          image: organization.link_instance.owner.image,
          email: organization.link_instance.owner.email,
          tokens: organization.link_instance.owner.tokens
        },
        name: organization.link_instance.name,
        subdomain: organization.link_instance.subdomain,
        email: organization.link_instance.email,
        url: organization.link_instance.url
      },
      name: organization.name,
      alternateName: organization.alternateName,
      description: organization.description,
      email: organization.email,
      url: organization.url,
      taxStatus: organization.tax_status,
      taxId: organization.tax_id,
      yearIncorporated: organization.year_incorporated,
      legalStatus: organization.legal_status
    };
  }
}

export default OrganizationAPI;
