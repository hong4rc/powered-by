# @hong4rc/powered-by

> Express middleware custom `X-Powered-X`

## Install

```bash
$ npm install @hong4rc/powered-by
```

Remember install `@types/express` for typescript:
```ts
$ npm install -D @types/express
```

## Usage

#### Typescript

```ts
import express from 'express';
import { poweredBy } from '@hong4rc/powered-by';

const app = express();
app.use(poweredBy());
```

```js
const express = require('express');
const { poweredBy } = require('@hong4rc/powered-by');

const app = express();
app.use(poweredBy());
```

## API

### poweredBy(value)

#### value

Type: `string | undefined`

Custom `X-Powered-By`, undefined to remove `X-Powered-By`
