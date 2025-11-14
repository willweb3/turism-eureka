# 🚀 Supabase Setup - Passo a Passo

## ✅ Credenciais Configuradas

- **Project ID**: `yysvhmnfikwsropgnngn`
- **URL**: `https://yysvhmnfikwsropgnngn.supabase.co`
- **Anon Key**: Já configurado em `.env.local`

## 📋 Próximos Passos

### 1️⃣ Executar Schema SQL

1. Ir ao Supabase Dashboard:
   👉 https://supabase.com/dashboard/project/yysvhmnfikwsropgnngn

2. No menu lateral, clicar em **SQL Editor**

3. Clicar em **New Query**

4. Copiar **TODO** o conteúdo de `supabase-schema.sql` e colar no editor

5. Clicar em **RUN** (ou `Ctrl+Enter`)

6. Verificar que não há erros na execução

### 2️⃣ Verificar Tabelas Criadas

1. No menu lateral, clicar em **Table Editor**

2. Deve ver estas tabelas:
   - ✅ `profiles`
   - ✅ `listings`
   - ✅ `transactions`
   - ✅ `transaction_items`
   - ✅ `promo_codes`
   - ✅ `qr_codes`
   - ✅ `reviews`

### 3️⃣ Configurar Storage (para imagens)

1. No menu lateral, clicar em **Storage**

2. Clicar em **Create a new bucket**

3. Nome do bucket: `listings`

4. **Desmarcar** "Public bucket" (vamos configurar policies manualmente)

5. Clicar em **Create bucket**

6. Ir para o bucket `listings` → **Policies**

7. Criar policy para **SELECT** (ver imagens):
   ```sql
   -- Nome: Public Access
   -- Allowed operation: SELECT
   CREATE POLICY "Public can view listing images"
   ON storage.objects FOR SELECT
   USING (bucket_id = 'listings');
   ```

8. Criar policy para **INSERT** (upload imagens):
   ```sql
   -- Nome: Authenticated users can upload
   -- Allowed operation: INSERT
   CREATE POLICY "Authenticated users can upload images"
   ON storage.objects FOR INSERT
   WITH CHECK (
     bucket_id = 'listings'
     AND auth.role() = 'authenticated'
   );
   ```

### 4️⃣ Configurar Authentication

1. No menu lateral, clicar em **Authentication** → **Providers**

2. **Email** (já está ativo por padrão)
   - ✅ Enable Email provider
   - ✅ Confirm email: **DESATIVAR** para desenvolvimento
     - Ir a **Authentication** → **Settings** → **Email Auth**
     - Desmarcar **"Enable email confirmations"**

3. **(Opcional)** OAuth Providers:
   - Google
   - Facebook
   - Etc.

### 5️⃣ Desativar Email Verification (Desenvolvimento)

Para facilitar testes:

1. **Authentication** → **Settings**

2. Em **Email Auth**:
   - Desmarcar **"Enable email confirmations"**
   - Isto permite criar contas sem verificar email

3. **Guardar**

### 6️⃣ Criar Utilizadores de Teste

Pode criar via:

**A) Interface (mais fácil):**
1. Ir a `http://localhost:3000/auth/signup`
2. Criar conta com:
   - Email: `tourist@test.com`
   - Password: `test123`
   - Nome: `João Turista`
   - Tipo: Tourist

**B) SQL (mais rápido para múltiplos users):**

```sql
-- No SQL Editor, executar:

-- 1. Criar auth user (password = 'test123')
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_user_meta_data,
  created_at,
  updated_at
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'tourist@test.com',
  crypt('test123', gen_salt('bf')),
  NOW(),
  '{"full_name": "João Turista"}'::jsonb,
  NOW(),
  NOW()
) RETURNING id;

-- 2. Copiar o UUID retornado e usar no profile
-- (ou deixar o trigger criar automaticamente)
```

### 7️⃣ Inserir Listings de Teste

Após criar um Provider:

```sql
-- Assumindo que provider_id = 'uuid-do-provider'
-- Pode ver em: Table Editor → profiles → copiar ID de um user com user_type = 'provider'

INSERT INTO listings (
  provider_id,
  type,
  title,
  description,
  price_per_unit,
  max_capacity,
  status
) VALUES
  (
    'SEU-PROVIDER-UUID-AQUI',
    'service',
    'Observação de Baleias',
    'Experiência única de observação de baleias e golfinhos no mar dos Açores. Inclui guia especializado e equipamento.',
    5000, -- 50.00 EUR
    12,
    'approved'
  ),
  (
    'SEU-PROVIDER-UUID-AQUI',
    'service',
    'Subida ao Pico',
    'Caminhada guiada até ao ponto mais alto de Portugal (2351m). Vista deslumbrante sobre o Atlântico.',
    3500, -- 35.00 EUR
    8,
    'approved'
  ),
  (
    'SEU-PROVIDER-UUID-AQUI',
    'product',
    'Vinho do Pico DOC',
    'Vinho tinto produzido nas vinhas classificadas como Património Mundial da UNESCO.',
    1500, -- 15.00 EUR
    NULL,
    'approved'
  ),
  (
    'SEU-PROVIDER-UUID-AQUI',
    'event',
    'Festa das Vindimas 2025',
    'Celebração anual da colheita das uvas com música tradicional, gastronomia e degustação de vinhos.',
    2000, -- 20.00 EUR
    100,
    'approved'
  );
```

### 8️⃣ Testar a Aplicação

```bash
cd frontend
npm run dev
```

Abrir: http://localhost:3000

**Testar:**
- ✅ Homepage carrega
- ✅ Serviços em destaque aparecem
- ✅ Pesquisa funciona
- ✅ Criar conta
- ✅ Login
- ✅ Ver detalhe de listing

## 🔍 Verificar Row Level Security (RLS)

Para confirmar que RLS está ativo:

```sql
-- No SQL Editor
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public';
```

Todas as tabelas devem ter `rowsecurity = true`

## 🐛 Troubleshooting

### Erro: "relation does not exist"
- Executar `supabase-schema.sql` no SQL Editor

### Erro: "JWT expired"
- Regerar Anon Key em Project Settings → API

### Imagens não aparecem
- Verificar bucket `listings` existe
- Verificar policies de acesso público

### Não consigo fazer signup
- Verificar se email verification está desativado
- Ver logs em Authentication → Logs

### Listings não aparecem
- Verificar se `status = 'approved'`
- Verificar RLS policies
- Ver no Table Editor se dados existem

## 📊 Monitorização

### Ver Logs
- **Database** → **Query Performance**
- **Authentication** → **Logs**
- **Storage** → **Logs**

### Ver Queries em Tempo Real
- **Database** → **Query Performance**

## 🎯 Próximo: Inserir Dados de Teste

Após setup, execute:

1. Criar 1 Provider (via signup)
2. Copiar UUID do provider
3. Inserir 4 listings (SQL acima)
4. Criar 1 Tourist (via signup)
5. Testar pesquisa e detalhe

## ✅ Checklist Final

- [ ] Schema SQL executado
- [ ] Tabelas criadas (7 tabelas)
- [ ] Storage bucket `listings` criado
- [ ] Email confirmation desativado
- [ ] .env.local configurado
- [ ] npm run dev a funcionar
- [ ] Homepage carrega
- [ ] Consegue criar conta
- [ ] Listings aparecem

Se tudo ✅, está pronto para desenvolver! 🚀
