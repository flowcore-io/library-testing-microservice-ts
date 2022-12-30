import {
  INestApplicationBuilderPlugin,
  NestApplicationBuilder,
} from "@jbiskur/nestjs-test-utilities";
import { LoggerModule } from "@flowcore/microservice";

export class LoggerModulePlugin implements INestApplicationBuilderPlugin {
  run(appBuilder: NestApplicationBuilder): void {
    appBuilder.withTestModule((builder) =>
      builder.withModule(
        LoggerModule.forRootAsync({
          useFactory: () => ({
            level: "debug",
            pretty: true,
          }),
        }),
      ),
    );
  }
}
