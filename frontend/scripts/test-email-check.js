/**
 * Script para testar verificação de email no Sharetribe
 */

const sharetribe = require('sharetribe-flex-integration-sdk');
require('dotenv').config({ path: '.env.local' });

const integrationSdk = sharetribe.createInstance({
  clientId: process.env.SHARETRIBE_CLIENT_ID,
  clientSecret: process.env.SHARETRIBE_CLIENT_SECRET,
  baseUrl: 'https://flex-integ-api.sharetribe.com',
  timeout: 30000,
});

const testEmail = process.argv[2] || 'test@example.com';

async function testEmailCheck() {
  console.log('🔍 Testando verificação de email:', testEmail);
  console.log('');

  try {
    // Tentar buscar por email
    console.log('Buscando com query email...');
    const response = await integrationSdk.users.query({
      email: testEmail.toLowerCase().trim(),
      perPage: 1,
    });

    console.log('');
    console.log('📊 Resultado:');
    console.log('Total encontrado:', response.data.data.length);

    if (response.data.data.length > 0) {
      console.log('✅ Email EXISTE no Sharetribe');
      console.log('');
      console.log('Dados do usuário:');
      const user = response.data.data[0];
      console.log('  - Nome:', user.attributes.profile.firstName, user.attributes.profile.lastName);
      console.log('  - Email:', user.attributes.email);
      console.log('  - ID:', user.id.uuid);
      console.log('  - Criado:', user.attributes.createdAt);
    } else {
      console.log('❌ Email NÃO existe no Sharetribe');
    }

    console.log('');
    console.log('📋 Listando todos os emails cadastrados:');
    const allUsers = await integrationSdk.users.query({ perPage: 100 });

    console.log('');
    allUsers.data.data.forEach((user, index) => {
      console.log(`${index + 1}. ${user.attributes.email}`);
    });

  } catch (error) {
    console.error('❌ Erro:', error.message);
    if (error.data) {
      console.error('Detalhes:', JSON.stringify(error.data, null, 2));
    }
  }
}

testEmailCheck();
