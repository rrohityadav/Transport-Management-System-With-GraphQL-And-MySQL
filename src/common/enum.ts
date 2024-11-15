import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  admin = 'admin',
  driver = 'driver',
  conductor = 'conductor',
  user = 'user',
}

export enum BaseStatus {
  active = 'active',
  inactive = 'inactive',
}

export enum DocumentType {
  insurance = 'insurance',
  registration = 'registration',
  permit = 'permit',
  maintenance = 'maintenance',
  other = 'other',
}

export enum VehicleType {
  car = 'car',
  bus = 'bus',
  truck = 'truck',
  motorcycle = 'motorcycle',
  van = 'van',
  bicycle = 'bicycle',
  other = 'other',
}

registerEnumType(UserRole, {
  name: 'UserRole',
});
registerEnumType(BaseStatus, {
  name: 'BaseStatus',
});
registerEnumType(DocumentType, {
  name: 'DocumentType',
});
registerEnumType(VehicleType, {
  name: 'VehicleType',
});
