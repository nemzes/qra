import axios, { AxiosInstance } from 'axios';

interface ApiStrategyNoAuth {
  fetcher: AxiosInstance;
  mustAuthenticate: false;
}

interface ApiStrategyAuth {
  fetcher: AxiosInstance;
  mustAuthenticate: true;
  isAuthenticated: () => boolean;
  startAuthentication: () => Promise<AxiosInstance>;
}

type ApiStrategy = ApiStrategyNoAuth | ApiStrategyAuth;

class DefaultApiStrategy implements ApiStrategyNoAuth {
  public fetcher = axios.create({
    baseURL: 'https://example.com/api1/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
  });

  public mustAuthenticate: false = false;
}

class AnotherApiStrategy implements ApiStrategyAuth {
  public fetcher = axios.create({
    baseURL: 'https://example.com/api2/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
  });

  public mustAuthenticate: true = true;

  public isAuthenticated = () => !!this.credentials;

  private credentials = '';

  public startAuthentication = async () =>
    new Promise<AxiosInstance>((resolve) => {
      setTimeout(() => {
        this.credentials = 'some key';
        this.fetcher.defaults.headers['banana'] = this.credentials;
        resolve(this.fetcher);
      }, 1000);
    });
}

const strategies = new Map<string, ApiStrategy>();

strategies.set('default', new DefaultApiStrategy());
strategies.set('api1', new AnotherApiStrategy());

export async function getHttpStrategy(strategyName: string) {
  const strategy = strategies.get(strategyName);

  if (!strategy) {
    throw new Error('boom');
  }

  if (strategy.mustAuthenticate && !strategy.isAuthenticated()) {
    return strategy.startAuthentication();
  }

  return strategy.fetcher;
}
