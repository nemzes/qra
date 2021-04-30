import { User } from '../../models/user';
import { routeInterpolate } from '../../utils/string';
import { getHttpStrategy } from '../http';

export async function getUserInfo(params: { userId: string }) {
  const api = await getHttpStrategy('api1');
  return api.get<User>(routeInterpolate(`/user/:userId`, params));
}
