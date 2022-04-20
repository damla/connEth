import { PrismaClient, Prisma, Language, Page } from '@prisma/client';

const prisma = new PrismaClient();

const contentData: Prisma.ContentCreateInput[] = [
  {
    language: Language.EN,
    page: Page.HOME,
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
    page: Page.HOME,
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
  for (const c of contentData) {
    const content = await prisma.content.create({
      data: c,
    });
    console.log(`Created content with id: ${content.id}`);
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
