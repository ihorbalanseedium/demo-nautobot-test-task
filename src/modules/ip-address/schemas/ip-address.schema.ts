import { z } from 'zod';

export const ipAddressSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  namespace: z.string().min(1, 'Namespace is required'),
  type: z.string().min(1, 'Type is required'),
  status: z.string().min(1, 'Status is required'),
  role: z.string().min(1, 'Role is required'),
  dns: z.string().min(1, 'Dns is required'),
  description: z.string().min(1, 'Description is required'),
});

export type CreateIpAddressForm = z.infer<typeof ipAddressSchema>;
