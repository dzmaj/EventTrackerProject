export class Job {
  id: number;
  position: string;
  description: string;
  city: string;
  state: string;
  company: string;
  url: string;
  source: string;

  constructor(
    id?: number,
    position?: string,
    description?: string,
    city?: string,
    state?: string,
    company?: string,
    url?: string,
    source?: string
    ) {
      this.id = id;
      this.position = position;
      this.description = description;
      this.city = city;
      this.state = state;
      this.company = company;
      this.url = url;
      this.source = source;
      }

}
