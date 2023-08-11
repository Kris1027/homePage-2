const webpages = [
  {
    link: 'https://www.google.pl/',
    image: 'image/google.png',
  },
  {
    link: 'https://www.linkedin.com/feed/',
    image: 'image/linkedin.png',
  },
  {
    link: 'https://github.com/Kris1027',
    image: 'image/github.png',
  },
  {
    link: 'https://www.facebook.com/',
    image: 'image/facebook.png',
  },
  {
    link: 'https://www.instagram.com/',
    image: 'image/instagram.png',
  },
  {
    link: 'https://www.youtube.com/',
    image: 'image/youtube.png',
  },
  {
    link: 'https://chat.openai.com/chat',
    image: 'image/chatgpt.png',
  },
  {
    link: 'https://www.ppe.pl/',
    image: 'image/ppe.png',
  },
  {
    link: 'https://allplay.com.pl/',
    image: 'image/allplay.png',
  },
  {
    link: 'https://store.playstation.com/pl-pl/pages/latest',
    image: 'image/playstation.png',
  },
  {
    link: 'https://lobby.ogame.gameforge.com/pl_PL/hub',
    image: 'image/ogame.png',
  },
  {
    link: 'https://translate.google.com/',
    image: 'image/tlumacz.png',
  },
  {
    link: 'https://www.flashscore.pl/',
    image: 'image/flashscore.png',
  },
  {
    link: 'https://pixabay.com/pl/',
    image: 'image/pixabay.png',
  },
  {
    link: 'https://picsum.photos/',
    image: 'image/loremPixum.png',
  },
  {
    link: 'https://www.google.pl/search?q=rgb+color+picker&source=hp&ei=xw9tZOWKIMeB9u8PobWg4As&iflsig=AOEireoAAAAAZG0d1yn7a-dECQVV9Z5ClL82olG28-63&oq=rgb+col&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAguEIAEENQCOgsILhCABBDHARDRAzoLCC4QgAQQxwEQrwFQAFi8CmDwFWgAcAB4AIABZIgBwQSSAQM2LjGYAQCgAQE&sclient=gws-wiz',
    image: 'image/rgb.png',
  },
  {
    link: 'https://justjoin.it/all/html',
    image: 'image/justjoinit.png',
  },
  {
    link: 'https://bulldogjob.pl/',
    image: 'image/Bulldogjob.png',
  },
  {
    link: 'https://rocketjobs.pl/',
    image: 'image/rocketjobs.png',
  },
  {
    link: 'https://nofluffjobs.com/pl',
    image: 'image/nofluffjobs.png',
  },
  {
    link: 'https://www.udemy.com/',
    image: 'image/udemy.png',
  },
  {
    link: 'https://websamuraj.pl/',
    image: 'image/websamuraj.png',
  },
  {
    link: 'https://platforma.studiuje.it/',
    image: 'image/studiujeit.png',
  },
  {
    link: 'https://pl.khanacademy.org/computing/computer-programming/',
    image: 'image/khan.png',
  },
  {
    link: 'https://www.flynerd.pl/',
    image: 'image/flynerd.png',
  },
  {
    link: 'https://stackoverflow.com/',
    image: 'image/stack.png',
  },
  {
    link: 'https://fonts.google.com/',
    image: 'image/googlefonts.png',
  },
  {
    link: 'https://lokeshdhakar.com/projects/lightbox2/',
    image: 'image/lightbox2.png',
  },
  {
    link: 'https://www.figma.com/community/',
    image: 'image/figma.png',
  },
  {
    link: 'https://dribbble.com/',
    image: 'image/dribble.png',
  },
  {
    link: 'https://www.behance.net/',
    image: 'image/behance.png',
  },
  {
    link: 'https://themeforest.net/category/site-templates/creative',
    image: 'image/website.png',
  },
  {
    link: 'https://caniuse.com/',
    image: 'image/caniuse.png',
  },
  {
    link: 'https://www.frontendmentor.io/home',
    image: 'image/frontend.png',
  },
  {
    link: 'https://css-tricks.com/',
    image: 'image/cssTricks.png',
  },
  {
    link: 'https://www.netlify.com/',
    image: 'image/netlify.png',
  },
  {
    link: 'https://gofile.io/welcome',
    image: 'image/gofile.png',
  },
  {
    link: 'https://fontawesome.com/',
    image: 'image/fontawesome.png',
  },
  {
    link: 'https://fontello.com/',
    image: 'image/fontello.png',
  },
  {
    link: 'https://iconscout.com/',
    image: 'image/iconscout.png',
  },
  {
    link: 'https://iconmonstr.com/',
    image: 'image/iconmonstr.png',
  },
  {
    link: 'https://www.flaticon.com/',
    image: 'image/flaticon.png',
  },
  {
    link: 'https://remixicon.com/',
    image: 'image/remixicon.png',
  },
  {
    link: 'https://cryptofonts.com/',
    image: 'image/cryptofonts.png',
  },
  {
    link: 'https://www.cssmatic.com/',
    image: 'image/cssmatic.png',
  },
  {
    link: 'https://neumorphism.io/#e0e0e0',
    image: 'image/neumporphism.png',
  },
  {
    link: 'https://hype4.academy/tools/glassmorphism-generator',
    image: 'image/glassmorphism.png',
  },
  {
    link: 'https://9elements.github.io/fancy-border-radius/',
    image: 'image/fancyborderradius.png',
  },
  {
    link: 'https://bennettfeely.com/',
    image: 'image/bennettfeely.png',
  },
  {
    link: 'https://animista.net/',
    image: 'image/animista.png',
  },
];
