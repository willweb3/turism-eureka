/**
 * Script para testar métodos disponíveis no Marketplace SDK
 */

const sharetribeSdk = require('sharetribe-flex-sdk');

const sdk = sharetribeSdk.createInstance({
  clientId: 'b91b9b8b-b2eb-4e0c-b809-c27fe91fd80c',
  baseUrl: 'https://flex-api.sharetribe.com',
});

console.log('\n📦 Métodos disponíveis no SDK:\n');
console.log(Object.keys(sdk));

console.log('\n📦 Métodos disponíveis em sdk.currentUser:\n');
if (sdk.currentUser) {
  console.log(Object.keys(sdk.currentUser));
}

console.log('\n📦 Métodos disponíveis em sdk.users:\n');
if (sdk.users) {
  console.log(Object.keys(sdk.users));
}

console.log('\n');
