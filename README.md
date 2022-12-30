![Build](https://github.com/flowcore-io/library-testing-microservice-ts/actions/workflows/publish.yml/badge.svg)

# Testing Microservice

Testing library for facilitating tests for the @flowcore/microservice modules

## Installation

install with npm:

```bash
npm install --save-dev @jbiskur/nestjs-test-utilities @flowcore/testing-microservice
```

or yarn:

```bash
yarn add @jbiskur/nestjs-test-utilities @flowcore/testing-microservice -D
```

## Usage

to use the library you can use it with the `NestJSApplicationBuilder`

```typescript
import {LoggerModulePlugin} from "@flowcore/testing-microservice";

// .. when you initialize your test
app = await new NestApplicationBuilder()
  .withTestModule((testModule) => testModule.withModule(TestModule))
  .with(LoggerModulePlugin)
  .build();
```

## Development

```bash
yarn install
```

or with npm:

```bash
npm install
```