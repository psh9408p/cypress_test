import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "xocr7t",

  e2e: {
    baseUrl: "http://localhost:3000",
  },
  env: {
    synpressRemoteAccount: "remote_account_private_key", // 원격 계정의 개인 키
    synpressAnchoringPeriod: 1000, // 트랜잭션이 마이너에 의해 처리되기를 기다리는 시간(밀리초)
  },
});
