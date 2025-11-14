# Continue: Submit Listing Implementation

## Próximos Arquivos a Criar

Baseado na imagem fornecida, aqui estão os componentes que precisam ser criados:

### 1. StepIndicator Component
**Arquivo:** `src/components/forms/StepIndicator.tsx`

Características da imagem:
- 4 steps horizontais
- Step 1 (ativo): círculo TEAL preenchido, número branco
- Steps 2-4 (inativos): círculo CINZA vazio, número cinza
- Linhas conectando (horizontais, cinza)
- Labels: "Basic Information", "Contact & Socials", "Availability", "Review & Submit"

### 2. WhySubmitCard Component  
**Arquivo:** `src/components/ui/WhySubmitCard.tsx`

Características da imagem:
- Card branco, bordas arredondadas
- Imagem panorâmica dos Açores no topo
- Título: "Why Submit Your Experience?"
- 4 benefícios com checkmarks VERDES em círculos:
  * Reach travelers from around the world
  * Support sustainable Azorean tourism
  * Join a community of local businesses
  * Free listing with no hidden fees

### 3. FileUpload Component
**Arquivo:** `src/components/ui/FileUpload.tsx`

Características da imagem:
- Área retangular com borda tracejada
- Ícone de upload (seta para cima) centralizado
- Texto "Upload Photos"
- Subtexto "Drag and drop photos here, or click to browse (Max 4 photos, 5MB each)"

### 4. BasicInformationStep Component
**Arquivo:** `src/components/forms/steps/BasicInformationStep.tsx`

Campos visíveis na imagem:
1. **Listing Title** - Input text
   - Placeholder: "Enter a catchy title for this experience"
2. **Description** - Textarea (grande, ~5-6 linhas)
   - Placeholder: "Describe your experience in detail"
3. **Select Island** - Dropdown
   - Placeholder: "Select Island"
4. **Select Category** - Dropdown
   - Placeholder: "Select Category"  
5. **Photo Upload** - FileUpload component
6. **Next Step button** - Botão teal, bottom right

### 5. Atualizar Submit Listing Page
**Arquivo:** `src/app/submit-listing/page.tsx`

Layout da imagem:
```
┌─────────────────────────────────────┐
│      Submit Your Listing            │
│  Share your... (subtitle)           │
├─────────────────────────────────────┤
│    [StepIndicator - 4 steps]        │
├──────────────┬──────────────────────┤
│              │  Basic Information   │
│ Why Submit   │  [Form Step 1]       │
│ Your         │                      │
│ Experience?  │  [Fields...]         │
│              │                      │
│ [Benefits]   │  [Next Step button]  │
└──────────────┴──────────────────────┘
```

Layout 2 colunas:
- Esquerda (1/3): WhySubmitCard (sticky?)
- Direita (2/3): Form com título + campos

## Cores Exatas da Imagem

- **Step ativo**: #3CA997 (teal)
- **Step inativo**: #E0E0E0 (cinza claro)
- **Checkmarks**: #52C6BB (teal mais claro)
- **Botão Next**: #3CA997 (teal)
- **Background**: #F5F5F5 (cinza muito claro)
- **Card**: #FFFFFF (branco)
- **Texto**: #11212D (dark blue)

## Responsividade

Mobile:
- Stack vertical
- WhySubmitCard abaixo do form
- Stepper horizontal scrollable

Desktop:
- Layout 2 colunas
- WhySubmitCard fixo na esquerda

## Comandos para Criar Rapidamente

```bash
# 1. StepIndicator
touch src/components/forms/StepIndicator.tsx

# 2. WhySubmitCard  
touch src/components/ui/WhySubmitCard.tsx

# 3. FileUpload
touch src/components/ui/FileUpload.tsx

# 4. BasicInformationStep
touch src/components/forms/steps/BasicInformationStep.tsx

# 5. Atualizar page
# Editar: src/app/submit-listing/page.tsx
```

## Prioridade

1. **StepIndicator** (rápido, visual importante)
2. **WhySubmitCard** (rápido, apenas apresentacional)
3. **FileUpload** (médio, tem lógica)
4. **BasicInformationStep** (complexo, form principal)
5. **Page** (integração de tudo)

## Tempo Estimado

- StepIndicator: 15-20 min
- WhySubmitCard: 10-15 min
- FileUpload: 30-40 min
- BasicInformationStep: 40-50 min
- Page: 20-30 min

**Total**: ~2-3 horas de trabalho focado

Quer que eu continue criando esses componentes agora?
