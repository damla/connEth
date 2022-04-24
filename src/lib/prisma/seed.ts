import { PrismaClient, Prisma, Language, PageType } from '@prisma/client';

const prisma = new PrismaClient();

const pageData: Prisma.PageCreateInput[] = [
  {
    language: Language.EN,
    page: PageType.HOME,
    content: {
      main: {
        title: 'Ready to dive in?',
        secondaryTitle: 'List your transactions, send ETH and more',
        connectBtn: 'Get in contact with the ETH chain!',
      },
      footer: {
        rights: 'All Rights Reserved.',
      },
    },
  },
  {
    language: Language.TR,
    page: PageType.HOME,
    content: {
      main: {
        title: 'Hazır mısın?',
        secondaryTitle: 'İşlem listeleme, ETH gönderme ve daha fazlası!',
        connectBtn: 'ETH zinciriniz ile iletişime geçin!',
      },
      footer: {
        rights: 'Tüm hakları saklıdır.',
      },
    },
  },
  {
    language: Language.EN,
    page: PageType.DASHBOARD,
    content: {
      navbar: {
        balance: 'Balance',
        loading: 'Yükleniyor...',
      },
      main: {
        title: 'Transactions',
        table: {
          col1: 'FROM',
          col2: 'TO',
          col3: 'DATE',
          col4: 'AMOUNT',
          loading: 'Loading...',
          noDataInformation: 'This address has no related transactions.',
          search: 'Search for transaction',
        },
      },
      footer: {
        rights: 'All Rights Reserved.',
      },
    },
  },
  {
    language: Language.TR,
    page: PageType.DASHBOARD,
    content: {
      navbar: {
        balance: 'Bakiye',
        loading: 'Yükleniyor...',
      },
      main: {
        title: 'İşlemler',
        table: {
          col1: 'GÖNDEREN',
          col2: 'ALAN',
          col3: 'TARİH',
          col4: 'MİKTAR',
          loading: 'Yükleniyor...',
          noDataInformation: 'Bu adres ile ilişkili işlem bulunmamaktadır.',
          search: 'İşlem ara',
        },
      },
      footer: {
        rights: 'Tüm hakları saklıdır.',
      },
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of pageData) {
    const page = await prisma.page.create({
      data: p,
    });
    console.log(`Created content with id: ${page.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
