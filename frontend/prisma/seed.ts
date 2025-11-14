import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Note: We're not deleting auth.users or the profiles created via Supabase Auth
  // Just seeding additional data

  // ========================================
  // 1. Check for existing users from Supabase Auth
  // ========================================

  const existingUsers = await prisma.user.findMany()
  console.log(`📊 Found ${existingUsers.length} existing users`)

  // If no users exist, we need to create them via Supabase Auth first
  if (existingUsers.length === 0) {
    console.log('⚠️  No users found. Please create users via Supabase Auth first.')
    console.log('   Go to: http://localhost:3000/auth/signup')
    console.log('   Create: provider@test.com, tourist@test.com, host@test.com')
    return
  }

  // Find users by email (assuming they were created via Auth)
  const provider = existingUsers.find((u) => u.full_name.includes('Provider'))
  const tourist = existingUsers.find((u) => u.full_name.includes('Turista'))
  const host = existingUsers.find((u) => u.full_name.includes('Host'))

  if (!provider) {
    console.log('⚠️  No provider found. Creating sample listings requires a provider user.')
    return
  }

  console.log('✅ Users found - seeding listings and other data...')

  // ========================================
  // 2. LISTINGS
  // ========================================

  const existingListings = await prisma.listing.findMany({
    where: { providerId: provider.id },
  })

  if (existingListings.length === 0) {
    await prisma.listing.createMany({
      data: [
        {
          providerId: provider.id,
          type: 'service',
          title: 'Observação de Baleias',
          description:
            'Experiência única de observação de baleias e golfinhos no mar dos Açores. Inclui guia especializado, equipamento de segurança e lanche a bordo.',
          images: [
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
            'https://images.unsplash.com/photo-1570481662006-a3a1374699e8',
          ],
          pricePerUnit: 5000, // €50
          maxCapacity: 12,
          status: 'approved',
        },
        {
          providerId: provider.id,
          type: 'service',
          title: 'Subida ao Pico',
          description:
            'Caminhada guiada até ao ponto mais alto de Portugal (2351m). Vista deslumbrante sobre o Atlântico. Inclui guia certificado.',
          images: ['https://images.unsplash.com/photo-1551632811-561732d1e306'],
          pricePerUnit: 3500, // €35
          maxCapacity: 8,
          status: 'approved',
        },
        {
          providerId: provider.id,
          type: 'product',
          title: 'Vinho do Pico DOC',
          description:
            'Vinho tinto produzido nas vinhas classificadas como Património Mundial da UNESCO. Ano 2022.',
          images: ['https://images.unsplash.com/photo-1510812431401-41d2bd2722f3'],
          pricePerUnit: 1500, // €15
          stock: 50,
          status: 'approved',
        },
        {
          providerId: provider.id,
          type: 'event',
          title: 'Festa das Vindimas 2025',
          description:
            'Celebração anual da colheita das uvas com música tradicional, gastronomia regional e degustação de vinhos locais.',
          images: ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3'],
          pricePerUnit: 2000, // €20
          maxCapacity: 100,
          status: 'approved',
        },
      ],
    })
    console.log('✅ Listings criados')
  } else {
    console.log(`✅ ${existingListings.length} listings já existem`)
  }

  // ========================================
  // 3. PROMO CODE (only if host exists)
  // ========================================

  if (host) {
    const existingPromo = await prisma.promoCode.findFirst({
      where: { hostId: host.id },
    })

    if (!existingPromo) {
      await prisma.promoCode.create({
        data: {
          code: 'CARLOS2025',
          hostId: host.id,
          discount_percentage: 10,
          maxUses: 100,
        },
      })
      console.log('✅ Promo code criado')
    } else {
      console.log('✅ Promo code já existe')
    }

    // ========================================
    // 4. QR CODE
    // ========================================

    const existingQR = await prisma.qRCode.findFirst({
      where: { hostId: host.id },
    })

    if (!existingQR) {
      await prisma.qRCode.create({
        data: {
          code: `QR-${host.id.substring(0, 8).toUpperCase()}`,
          hostId: host.id,
          name: 'QR Code Principal',
        },
      })
      console.log('✅ QR code criado')
    } else {
      console.log('✅ QR code já existe')
    }
  }

  // ========================================
  // 5. SAMPLE TRANSACTION (only if tourist and provider exist)
  // ========================================

  if (tourist && provider) {
    const listings = await prisma.listing.findMany({
      where: { providerId: provider.id },
      take: 1,
    })

    if (listings.length > 0) {
      const existingTransaction = await prisma.transaction.findFirst({
        where: { customer_id: tourist.id },
      })

      if (!existingTransaction) {
        const totalAmount = 10000 // €100
        const platformFee = Math.round(totalAmount * 0.1) // 10%
        const hostCommission = host ? Math.round(totalAmount * 0.05) : 0 // 5%
        const providerAmount = totalAmount - platformFee - hostCommission // 85%

        const transaction = await prisma.transaction.create({
          data: {
            customer_id: tourist.id,
            provider_id: provider.id,
            host_id: host?.id || null,
            promo_code: 'CARLOS2025',
            totalAmount,
            platform_fee: platformFee,
            host_commission: hostCommission,
            providerAmount,
            status: 'paid',
            items: {
              create: {
                listingId: listings[0].id,
                quantity: 2,
                price_at_purchase: 5000,
                bookingDate: new Date('2025-07-15'),
              },
            },
          },
        })
        console.log('✅ Transaction criada')

        // ========================================
        // 6. REVIEW
        // ========================================

        await prisma.review.create({
          data: {
            transaction_id: transaction.id,
            listingId: listings[0].id,
            reviewer_id: tourist.id,
            rating: 5,
            comment:
              'Experiência incrível! O guia foi muito profissional e vimos várias baleias. Recomendo!',
          },
        })
        console.log('✅ Review criada')
      } else {
        console.log('✅ Transaction já existe')
      }
    }
  }

  // ========================================
  // SUMMARY
  // ========================================

  console.log('\n🎉 Seed completo!')
  console.log('=====================================')
  console.log(`👤 Users: ${await prisma.user.count()}`)
  console.log(`📋 Listings: ${await prisma.listing.count()}`)
  console.log(`🎫 Promo Codes: ${await prisma.promoCode.count()}`)
  console.log(`📱 QR Codes: ${await prisma.qRCode.count()}`)
  console.log(`💳 Transactions: ${await prisma.transaction.count()}`)
  console.log(`⭐ Reviews: ${await prisma.review.count()}`)
  console.log('=====================================\n')
}

main()
  .catch((e) => {
    console.error('❌ Erro ao fazer seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
