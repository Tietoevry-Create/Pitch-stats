type CompanyEntity = {
  orgnr: number;
  name: string;
  type: string;
  dateFounded: string;
  numberOfEmployees: number;

  subsidiaries: object;

  postalArea: string;
  postalCode: number;

  municipalityName: string;
  municipalityCode: number;

  industryName: string;
  industryCode: number;

  sectorName: string;
  sectorCode: number;
};
