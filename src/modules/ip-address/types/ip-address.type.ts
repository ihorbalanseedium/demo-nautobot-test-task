export type IPAddress = {
  id: string;
  object_type: string;
  display: string;
  url: string;
  natural_slug: string;
  address: string;
  host: string;
  mask_length: number;
  type: string;
  ip_version: number;
  dns_name: string;

  description: string;
  status: {
    id: string;
    object_type: string;
    url: string;
  } | null;
  role: {
    id: string;
    object_type: string;
    url: string;
  } | null;
  parent: {
    id: string;
    object_type: string;
    url: string;
  };
  tenant: {
    id: string;
    object_type: string;
    url: string;
  } | null;
  nat_inside: {
    id: string;
    object_type: string;
    url: string;
  } | null;
  created: string;
  last_updated: string;
  tags: {
    id: string;
    object_type: string;
    url: string;
  }[];
  notes_url: string;
  custom_fields: {
    [key: string]: string;
  };
  nat_outside_list: {
    id: string;
    object_type: string;
    url: string;
  }[];
  interfaces: {
    id: string;
    object_type: string;
    url: string;
  }[];
  vm_interfaces: {
    id: string;
    object_type: string;
    url: string;
  }[];
};
