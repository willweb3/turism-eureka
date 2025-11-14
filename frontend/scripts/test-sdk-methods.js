/**
 * Script para verificar métodos disponíveis no Integration SDK
 */

const sharetribe = require('sharetribe-flex-integration-sdk');
require('dotenv').config({ path: '.env.local' });

const integrationSdk = sharetribe.createInstance({
  clientId: process.env.SHARETRIBE_CLIENT_ID,
  clientSecret: process.env.SHARETRIBE_CLIENT_SECRET,
  baseUrl: 'https://flex-integ-api.sharetribe.com',
});

console.log('📦 Métodos disponíveis no integrationSdk.users:\n');
console.log(Object.keys(integrationSdk.users));
console.log('\n');

console.log('📦 Métodos disponíveis no integrationSdk:\n');
console.log(Object.keys(integrationSdk));
