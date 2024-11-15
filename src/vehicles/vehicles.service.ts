import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateVehicleInput,
  QueryVehicleArgs,
} from './dto/create-vehicle.input';
import { UpdateVehicleInfoInput } from './dto/update-vehicle.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepository: Repository<Vehicle>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createVehicleInput: CreateVehicleInput) {
    const { driverId, conductorId, ...vehicleData } = createVehicleInput;
    const vehicle = this.vehiclesRepository.create(vehicleData);
    if (driverId) {
      vehicle.driver = await this.usersRepository.findOneBy({ id: driverId });
    }
    if (conductorId) {
      vehicle.conductor = await this.usersRepository.findOneBy({
        id: conductorId,
      });
    }
    return await this.vehiclesRepository.save(vehicle);
  }

  async findAll() {
    const result = await this.vehiclesRepository.find({
      relations: ['conductor', 'driver', 'trips'],
    });
    if (result) return result;
    throw new BadRequestException('Vehicles is not found');
  }

  async findOne(payload: QueryVehicleArgs) {
    const result = await this.vehiclesRepository.findOne({
      where: { id: payload.id },
      relations: ['conductor', 'driver', 'trips'],
    });
    if (result) return result;
    throw new BadRequestException('Vehicle is not found');
  }

  async update(payload: UpdateVehicleInfoInput): Promise<number> {
    const { id, info } = payload;
    const result = await this.vehiclesRepository.update(id, {
      info: {
        ...info,
      },
    });
    if (result) return result.affected;
    throw new BadRequestException('Vehicle Info is not updated');
  }

  async remove(id: number): Promise<number> {
    const result = await this.vehiclesRepository.delete(id);
    if (result.affected > 0) return result.affected;
    throw new BadRequestException('User is not remove');
  }
}
