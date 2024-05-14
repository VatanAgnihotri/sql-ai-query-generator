# sql-ai-query-generator

<!-- releases / versioning -->
[![package-json](https://img.shields.io/github/package-json/v/VatanAgnihotri/sql-ai-query-generator.svg)](https://www.npmjs.com/package/sql-ai-query-generator)
<!--
[![releases](https://img.shields.io/github/tag-pre/VatanAgnihotri/sql-ai-query-generator.svg)](https://github.com/VatanAgnihotri/sql-ai-query-generator/releases)
[![commits](https://img.shields.io/github/commits-since/VatanAgnihotri/sql-ai-query-generator/v1.0.5.svg)](https://github.com/VatanAgnihotri/sql-ai-query-generator/commits/main)
-->
<br><!-- downloads -->
[![dt](https://img.shields.io/npm/dt/sql-ai-query-generator.svg)](https://npmjs.org/package/sql-ai-query-generator)
[![dy](https://img.shields.io/npm/dy/sql-ai-query-generator.svg)](https://npmjs.org/package/sql-ai-query-generator)
[![dm](https://img.shields.io/npm/dm/sql-ai-query-generator.svg)](https://npmjs.org/package/sql-ai-query-generator)
[![dw](https://img.shields.io/npm/dw/sql-ai-query-generator.svg)](https://npmjs.org/package/sql-ai-query-generator)

This is a node package that you can use to generate SQL queries by providing inputs in simple English.

It uses [OpenAI](https://www.npmjs.com/package/openai) to generate SQL queries.

## Installation

```sh
npm install sql-ai-query-generator
```
<br/>
This package supports both CommonJS and ES Module.

You can import in the ES Module via:

```ts
import createSQLQuery from 'sql-ai-query-generator';
```

You can import in CommonJS Module via:

```js
const { createSQLQuery } = require("sql-ai-query-generator");
```

## Usage

```javascript
const { createSQLQuery } = require("sql-ai-query-generator");

const main = async () => {
  const query = await createSQLQuery(API_KEY, ENGINE, QUERY);
};

main();

```

### CreateSQLQuery Function Arguments


- `API_KEY` : `string`, required:`true`
- `ENGINE` : `string`, required:`true`, options:`gpt-3.5-turbo, gpt-4`
- `QUERY` : `string`, required:`true`

### Additional Resources

- `How to generate OpenAI API Key`: [OpenAI API Guide](https://platform.openai.com/docs/quickstart?context=node)

<!--
## Example

You can interact with the example in a few different ways:

1. Check the live Demo. Navigate to [http://localhost:1234/](http://localhost:1234/).<br>
1. Hit the live API using this package with Postman. Use the below details.

- `Method`:`POST`
- `Endpoint`:`https://sql-query-generator-backend.onrender.com/query`
- `Body`: ` {"QUERY": "Create user table with firstname, lastname, DOB, highest education"}`

-->
