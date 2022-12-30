import { NestApplicationBuilder } from "@jbiskur/nestjs-test-utilities";
import { INestApplication, Injectable, Module } from "@nestjs/common";
import { InjectLogger, LoggerService } from "@flowcore/microservice";
import { LoggerModulePlugin } from "../src";

@Injectable()
class ExampleService {
  constructor(@InjectLogger() private readonly logger: LoggerService) {}

  log() {
    this.logger.info("Log using the injected logger");
  }
}

@Module({
  imports: [],
  providers: [ExampleService],
})
class TestModule {}

describe("Example Module", () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await new NestApplicationBuilder()
      .withTestModule((testModule) => testModule.withModule(TestModule))
      .with(LoggerModulePlugin)
      .build();
  });

  it("should say hello", async () => {
    const test = await app.resolve(ExampleService);

    expect(() => test.log()).not.toThrow();
  });

  afterEach(async () => {
    await app.close();
  });
});
