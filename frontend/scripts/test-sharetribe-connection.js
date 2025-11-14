/**
 * Script para testar conexão com Sharetribe
 *
 * Execução: node scripts/test-sharetribe-connection.js
 */

const sharetribe = require('sharetribe-flex-integration-sdk');

// Carregar env vars
require('dotenv').config({ path: '.env.local' });

const CLIENT_ID = process.env.SHARETRIBE_CLIENT_ID;
const CLIENT_SECRET = process.env.SHARETRIBE_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('❌ Credenciais Sharetribe não encontradas no .env.local');
  console.error('   Necessário: SHARETRIBE_CLIENT_ID e SHARETRIBE_CLIENT_SECRET');
  process.exit(1);
}

console.log('🔄 Testando conexão com Sharetribe...\n');
console.log('Client ID:', CLIENT_ID);
console.log('Marketplace: azoreon-test\n');

const integrationSdk = sharetribe.createInstance({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  baseUrl: 'https://flex-integ-api.sharetribe.com',
  timeout: 30000,
});

async function testConnection() {
  try {
    // Testar listando usuários existentes
    console.log('📡 Buscando usuários no Sharetribe...\n');

    const response = await integrationSdk.users.query({
      perPage: 5,
    });

    console.log('✅ Conexão com Sharetribe funcionando!\n');
    console.log(`📊 Total de usuários encontrados: ${response.data.meta.totalItems || 0}`);

    if (response.data.data.length > 0) {
      console.log('\n👥 Últimos usuários cadastrados:\n');
      response.data.data.forEach((user, index) => {
        console.log(`${index + 1}. ${user.attributes.profile.firstName} ${user.attributes.profile.lastName}`);
        console.log(`   Email: ${user.attributes.email}`);
        console.log(`   ID: ${user.id.uuid}`);
        console.log(`   Criado: ${user.attributes.createdAt}`);
        console.log('');
      });
    } else {
      console.log('\n📝 Nenhum usuário cadastrado ainda.');
      console.log('   O primeiro usuário que se registrar vai aparecer aqui!\n');
    }

    console.log('✅ Sistema pronto para criar usuários no Sharetribe!\n');
    return true;

  } catch (error) {
    console.error('❌ Erro ao conectar com Sharetribe:\n');
    console.error('Mensagem:', error.message);

    if (error.status) {
      console.error('Status HTTP:', error.status);
    }

    if (error.status === 401) {
      console.error('\n⚠️  Credenciais inválidas. Verifique:');
      console.error('   - SHARETRIBE_CLIENT_ID');
      console.error('   - SHARETRIBE_CLIENT_SECRET');
    }

    console.error('\n');
    return false;
  }
}

testConnection()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error('Erro inesperado:', error);
    process.exit(1);
  });
