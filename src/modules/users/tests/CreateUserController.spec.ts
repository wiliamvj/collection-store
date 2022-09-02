import { CreateUserRepositoryInMemo } from './CreateUserReppositoryInMemo';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserEntity } from '../entities/create-user.entity';
import { transformAndValidate } from 'class-transformer-validator';

describe('Create new user', () => {
  it('Should be able to create a new user', async () => {
    const userMock = {
      name: 'Wiliam',
      email: 'wiliamjoaqusim@gmail.com',
      password: 'thePas12$#',
    } as CreateUserDto;

    const createUserRepositoryInMemo = new CreateUserRepositoryInMemo();
    const createUserMock: CreateUserEntity =
      await createUserRepositoryInMemo.execute(userMock);

    expect(createUserMock).toHaveProperty('id');
    expect(createUserMock).toHaveProperty('name');
    expect(createUserMock).toHaveProperty('email');
  });

  it('Should not be able to create user with weak password', async () => {
    const userMock = {
      name: 'Wiliam',
      email: 'wiliamjoaqusim@gmail.com',
      password: '1234',
    } as CreateUserDto;

    const userJson = JSON.stringify(userMock);

    const error = await transformAndValidate(CreateUserDto, userJson).catch(
      err => {
        return err[0].constraints;
      },
    );

    expect(error).toHaveProperty('matches');
    expect(error.matches).toEqual(
      'Enter a password of at least 8 characters with capital letters and special characters',
    );
  });
});
