export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
