# Submit Listing - Implementação Consolidada

## ✅ O que foi implementado até agora:

###

 1. **TypeScript Interfaces** (`src/types/listing.ts`)
- ✅ `ListingCategory` type
- ✅ `AzoresIsland` type
- ✅ `BasicInformationData` interface
- ✅ `ContactSocialData` interface
- ✅ `AvailabilityData` interface
- ✅ `ListingSubmission` interface
- ✅ Labels para dropdowns (ISLAND_LABELS, CATEGORY_LABELS)

### 2. **Zod Validation Schemas** (`src/lib/validations/submitListing.ts`)
- ✅ `basicInformationSchema` - Valida Step 1
- ✅ `contactSocialSchema` - Valida Step 2
- ✅ `availabilitySchema` - Valida Step 3

### 3. **Zustand Store** (`src/lib/stores/submitListingStore.ts`)
- ✅ Multi-step state management
- ✅ Persist middleware configurado
- ✅ Actions: setCurrentStep, goToNextStep, goToPreviousStep
- ✅ Validação: canGoToStep()
- ✅ Reset form

---

## 📋 Próximos Passos (Ordem de Implementação):

### Fase 1: Componentes de UI Base

**1. StepIndicator**
```tsx
// src/components/forms/StepIndicator.tsx
- Círculos numerados (4 steps)
- Linhas de conexão
- Estados: active, completed, inactive
- Versões desktop (horizontal) e mobile (vertical)
- Clicável se canNavigateToStep retornar true
```

**2. ProgressBar**
```tsx
// src/components/forms/ProgressBar.tsx
- Barra horizontal 20%, 50%, 75%, 100%
- Cor teal (#3CA997)
- Background neutral (#F2F6F8)
- Animação smooth
```

**3. FileUpload**
```tsx
// src/components/ui/FileUpload.tsx
- Drag & drop zone
- Preview de imagens (grid 2x2)
- Botão X para remover
- Validações: tipo, tamanho (5MB), quantidade (4 max)
- Loading state durante upload
```

**4. WhySubmitCard**
```tsx
// src/components/ui/WhySubmitCard.tsx
- Card branco com imagem topo
- Título "Why Submit Your Experience?"
- Lista de 4 benefícios com checkmarks
- Checkmarks em círculos teal (#D7F4F0)
```

### Fase 2: Formulário Step 1

**5. BasicInformationStep**
```tsx
// src/components/forms/steps/BasicInformationStep.tsx
- React Hook Form com Zod resolver
- Campos:
  * Title (input text)
  * Description (textarea)
  * Island (select dropdown)
  * Category (select dropdown)
  * Images (FileUpload component)
- Botão "Next Step"
- Salva no Zustand store
- Avança para step 2
```

### Fase 3: Página Principal

**6. Submit Listing Page**
```tsx
// src/app/submit-listing/page.tsx
- Layout: Sidebar (WhySubmitCard) + Main (Form)
- Header com StepIndicator
- ProgressBar no topo do form
- Renderização condicional dos steps
- Protected route (redirect se não logado)
- Responsivo (stack vertical em mobile)
```

---

## 🎨 Design System a Seguir:

### Cores
```
Primary Teal: #3CA997 (steps ativos, botões)
Teal 50: #D7F4F0 (backgrounds, checkmarks)
Dark Blue: #11212D (textos)
Grey 500: #777777 (textos secundários)
Grey 300: #A8A2A2 (inactive steps)
Grey 100: #D6D8DF (borders, lines)
Neutral 50: #F2F6F8 (backgrounds)
```

### Typography
```
Headings: font-lufga font-semibold
Body: font-hanken (300-500 weight)
Labels: text-sm font-medium
```

### Spacing
```
Form gaps: space-y-6
Card padding: p-8
Section padding: py-16
```

---

## 📁 Estrutura Final de Arquivos:

```
src/
├── types/
│   └── listing.ts                       ✅ CRIADO
├── lib/
│   ├── validations/
│   │   └── submitListing.ts             ✅ CRIADO
│   └── stores/
│       └── submitListingStore.ts        ✅ CRIADO
├── components/
│   ├── forms/
│   │   ├── StepIndicator.tsx            ⏳ PRÓXIMO
│   │   ├── ProgressBar.tsx              ⏳ PRÓXIMO
│   │   └── steps/
│   │       └── BasicInformationStep.tsx ⏳ PRÓXIMO
│   └── ui/
│       ├── FileUpload.tsx               ⏳ PRÓXIMO
│       └── WhySubmitCard.tsx            ⏳ PRÓXIMO
└── app/
    └── submit-listing/
        └── page.tsx                      ⏳ PRÓXIMO
```

---

## 🔧 Como Continuar:

### 1. Criar StepIndicator
```bash
# Ver exemplo detalhado em:
# https://ui.shadcn.com/docs/components/stepper
```

### 2. Criar ProgressBar
```tsx
export function ProgressBar({ currentStep, totalSteps }: Props) {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="w-full h-2 bg-[#F2F6F8] rounded-full overflow-hidden">
      <div
        className="h-full bg-[#3CA997] transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
```

### 3. Criar FileUpload
- Usar `react-dropzone` ou implementar nativo
- Preview com `URL.createObjectURL(file)`
- Grid com `grid grid-cols-2 gap-4`

### 4. Criar BasicInformationStep
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { basicInformationSchema } from '@/lib/validations/submitListing';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';

export function BasicInformationStep() {
  const { setBasicInfo, goToNextStep } = useSubmitListingStore();
  
  const form = useForm({
    resolver: zodResolver(basicInformationSchema),
  });
  
  const onSubmit = (data) => {
    setBasicInfo(data);
    goToNextStep();
  };
  
  return <form onSubmit={form.handleSubmit(onSubmit)}>...</form>;
}
```

### 5. Atualizar Page Principal
- Layout com 2 colunas (sidebar + form)
- Responsive (stack em mobile)
- Protected route com useAuth()

---

## ⚠️ Notas Importantes:

1. **Todas as bases estão criadas** (types, schemas, store)
2. **Falta apenas os componentes visuais** (UI layer)
3. **Use a página antiga** `/submit-listing/page.tsx` como referência
4. **Seguir design system** estabelecido no prompt
5. **Testar mobile first** - layout deve ser responsivo

---

## 🚀 Comando para Testar:

```bash
# Após criar todos os componentes:
npm run dev
# Acesse: http://localhost:3000/submit-listing
```

---

**Status Atual:** ✅ 30% completo (Infraestrutura pronta)
**Próximo:** 🎨 Criar componentes de UI (70% restante)
