import { PrismaClient, Prisma, Language, PageType } from '@prisma/client';

const prisma = new PrismaClient();

const pageData: Prisma.PageCreateInput[] = [
  {
    language: Language.EN,
    page: PageType.HOME,
    content: {
      // TODO: delete navbar if it is not used
      navbar: {
        // error: 'Please visit the website with an available Metamask Wallet',
        // walletBtn: {
        //   text: 'Connect Metamask Wallet',
        //   loading: 'Connecting...',
        // },
      },
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
      navbar: {
        // error: 'Please visit the website with an available Metamask Wallet',
        // walletBtn: {
        //   text: 'Connect Metamask Wallet',
        //   loading: 'Connecting...',
        // },
      },
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
