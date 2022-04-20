import { PrismaClient, Prisma, Language, Page, PageType } from '@prisma/client';

const prisma = new PrismaClient();

const pageData: Prisma.PageCreateInput[] = [
  {
    language: Language.EN,
    page: PageType.HOME,
    content: {
      navbar: 'Connect Wallet',
      main: {
        title: 'Get in contact with your ETH chain!',
        subtitle:
          'Connect your wallet to list your transactions, send ETH and more!',
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
      navbar: 'Cüzdanı Bağla',
      main: {
        title: 'ETH zinciriniz ile iletişime geçin!',
        subtitle:
          'İşlemlerinizi görüntülemek, ETH göndermek ve daha fazlası için cüzdanınızı bağlayın!',
      },
      footer: {
        rights: 'Tüm hakları saklıdır.',
      },
    },
  },
  // TODO: add seed for dashboard etc.
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
