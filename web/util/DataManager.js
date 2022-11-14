export default class DataManager {
  constructor() {
    this.sites = [
      {
        slug: 'dagbladet',
        title: 'Dagbladet',
        url: 'https://www.dagbladet.no/',
        type: 'Nyheter',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'vg',
        title: 'Verdens Gang',
        url: 'https://www.vg.no/',
        type: 'Nyheter',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'ba',
        title: 'Bergens Avisen',
        url: 'https://www.ba.no/',
        type: 'Nyheter',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'bt',
        title: 'Bergens Tidende',
        url: 'https://www.bt.no/',
        type: 'Nyheter',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'nettavisen',
        title: 'Nettavisen',
        url: 'https://www.nettavisen.no/',
        type: 'Nyheter',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'dn',
        title: 'Dagens Næringsliv',
        url: 'https://www.dn.no/',
        type: 'Nyheter',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'tietoevry',
        title: 'TietoEvry',
        url: 'https://www.tietoevry.com/',
        type: 'Teknologi',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'sanity',
        title: 'Sanity',
        url: 'https://www.sanity.io/',
        type: 'Teknologi',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'teknologiraadet',
        title: 'Teknologirådet',
        url: 'https://teknologiradet.no/',
        type: 'Teknologi',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'tu',
        title: 'TU',
        url: 'https://www.tu.no/',
        type: 'Nyheter',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'digi',
        title: 'Digi',
        url: 'https://www.digi.no/',
        type: 'Nyheter',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'bronnoysundregistrene',
        title: 'Brønnøysundregistrene',
        url: 'https://www.brreg.no/',
        type: 'Offentlig',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'bergenkommune',
        title: 'Bergen kommune',
        url: 'https://www.bergen.kommune.no/',
        type: 'Offentlig',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'regjeringen',
        title: 'Regjeringen',
        url: 'https://www.regjeringen.no/no/id4/',
        type: 'Offentlig',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'norge',
        title: 'Norge',
        url: 'https://www.norge.no/nb',
        type: 'Offentlig',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'fjordkraft',
        title: 'Fjordkraft',
        url: 'https://www.fjordkraft.no/',
        type: 'Stromselskaper',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'bkk',
        title: 'BKK',
        url: 'https://nett.bkk.no/',
        type: 'Stromselskaper',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'tibber',
        title: 'Tibber',
        url: 'https://www.tibber.no/',
        type: 'Stromselskaper',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      },
      {
        slug: 'norgesenergi',
        title: 'NorgesEnergi',
        url: 'https://norgesenergi.no/',
        type: 'Stromselskaper',
        results: {
          carbon: 24,
          performance: 56,
          accessibility: 46,
          seo: 76
        }
      }
    ];

    this.categories = [
      {
        slug: 'nyheter',
        title: 'Nyheter',
        text: 'Nyheter er ny informasjon om hendelser av interesse for publikum, formidlet av en journalist gjennom ulike medier som for eksempel en nettside. Her en liste av de mest leste i Norge.',
        svg: 'M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385'
      },
      {
        slug: 'offentlig',
        title: 'Offentlig',
        text: 'Nettsider som driftes av statlige, regionale eller lokale myndigheter, offentligrettslige organer og sammenslutninger dannet av én eller flere slike myndigheter eller offentligrettslige organer.',
        svg: 'M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z'
      },
      {
        slug: 'teknologi',
        title: 'Teknologi',
        text: 'Det finnes en rekke norske nettsider som spesialiserer seg på å informere befolkningen om ny og spennende teknologi som jobbes med. Her er en liste av de mest populære i Norge.',
        svg: 'M17.237,3.056H2.93c-0.694,0-1.263,0.568-1.263,1.263v8.837c0,0.694,0.568,1.263,1.263,1.263h4.629v0.879c-0.015,0.086-0.183,0.306-0.273,0.423c-0.223,0.293-0.455,0.592-0.293,0.92c0.07,0.139,0.226,0.303,0.577,0.303h4.819c0.208,0,0.696,0,0.862-0.379c0.162-0.37-0.124-0.682-0.374-0.955c-0.089-0.097-0.231-0.252-0.268-0.328v-0.862h4.629c0.694,0,1.263-0.568,1.263-1.263V4.319C18.5,3.625,17.932,3.056,17.237,3.056 M8.053,16.102C8.232,15.862,8.4,15.597,8.4,15.309v-0.89h3.366v0.89c0,0.303,0.211,0.562,0.419,0.793H8.053z M17.658,13.156c0,0.228-0.193,0.421-0.421,0.421H2.93c-0.228,0-0.421-0.193-0.421-0.421v-1.263h15.149V13.156z M17.658,11.052H2.509V4.319c0-0.228,0.193-0.421,0.421-0.421h14.308c0.228,0,0.421,0.193,0.421,0.421V11.052z'
      },
      {
        slug: 'stromselskaper',
        title: 'Strømselskaper',
        text: 'Strømleverandørene kjøper strøm på den nordiske strømbørsen, og selger denne strømmen videre til deg som kunde. Her er en liste over nettsidene til noen av de største aktørene i Norge.',
        svg: 'M18.796,6.974h-0.652V5.201c0-0.457-0.372-0.831-0.831-0.831H1.204c-0.459,0-0.831,0.373-0.831,0.831v9.599c0,0.459,0.372,0.831,0.831,0.831h16.11c0.459,0,0.831-0.372,0.831-0.831v-1.704h0.652c0.459,0,0.831-0.37,0.831-0.831v-4.46C19.627,7.346,19.256,6.974,18.796,6.974z M16.483,13.969H2.034V6.031h14.448v1.773v4.46V13.969z'
      }
    ];

    this.footerPaths = [
      {
        title: 'Tietoevry',
        slug: 'https://tietoevry.com'
      },
      {
        title: 'GitHub',
        slug: 'https://github.com/Tietoevry-Create/Pitch-stats'
      }
    ];

    this.siteData = {
      baseURL: 'https://localhost:3000',
      sitename: 'ProjStats',
      description: 'A tool for analysing webpages of Norwegian companies.',
      type: 'Website',
      icon: { alt: 'Website icon', src: '/favicon.ico' }
    };

    this.frontpageContent = {
      slug: '/',
      title: 'ProjStat (TBD)',
      content: [
        {
          definition: 'Evaluering av nettsider',
          text: 'Det finnes mange datapunkter for å vurdere en nettside. Dette verktøyet analyserer utslipp av karbonmonoksid, brukervennlighet, hvor søkemotorvennlig siden er, samt performance. Sidene blir vist etter næring. (Litt mer tekst her for å se hvor stort det eventuelt blir i div boksen dersom vi skal ha mer tekst senere bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
          svg: ''
        }
      ]
    };

    this.aboutContent = {
      slug: 'om',
      title: 'Om',
      content: [
        {
          definition: 'Hvordan analyseres nettsiden din ?',
          text: 'Vi benytter Google sitt PageSpeed Insight API, til å analysere nettsider via et verktøy som kalles Lighthouse. Verktøyet måler og genererer en rapport av en nettsides ytelse, brukervennlighet og søkemotorvennlighet. Rapporten kan for eksempel brukes til å oppdage forbedringsmuligheter for videre utvikling av nettsiden.',
          svg: ''
        }
      ]
    };

    this.categoryContent = {
      slug: 'kategori',
      title: 'Kategorier',
      content: [
        {
          definition: 'CATEGORY ?',
          text: 'Vi benytter Google sitt PageSpeed Insight API, til å analysere nettsider via et verktøy som kalles Lighthouse. Verktøyet måler og genererer en rapport av en nettsides ytelse, brukervennlighet og søkemotorvennlighet. Rapporten kan for eksempel brukes til å oppdage forbedringsmuligheter for videre utvikling av nettsiden.',
          svg: ''
        }
      ],
      categories: this.categories
    };

    this.siteContent = {
      slug: 'side',
      title: 'Sider',
      content: [
        {
          definition: 'SITE ?',
          text: 'Vi benytter Google sitt PageSpeed Insight API, til å analysere nettsider via et verktøy som kalles Lighthouse. Verktøyet måler og genererer en rapport av en nettsides ytelse, brukervennlighet og søkemotorvennlighet. Rapporten kan for eksempel brukes til å oppdage forbedringsmuligheter for videre utvikling av nettsiden.',
          svg: ''
        }
      ],
      sites: this.sites
    };
  }

  generateProdURL(base, slug) {
    return base + '/' + slug + '/';
  }

  getPageContent(slug) {
    const categorySlugs = this.categoryContent.categories.map((item) => item.slug);

    const siteSlugs = this.siteContent.sites.map((item) => item.slug);

    if (categorySlugs.includes(slug)) {
      const val = this.categoryContent.categories.filter((item) => item.slug === slug)[0];

      return val;
    } else if (siteSlugs.includes(slug)) {
      const val = this.siteContent.sites.filter((item) => item.slug === slug)[0];

      return val;
    } else {
      switch (slug) {
        case '/':
          return this.frontpageContent;
        case 'om':
          return this.aboutContent;
        case 'kategori':
          return this.categoryContent;
        case 'side':
          return this.siteContent;
        default:
          break;
      }
    }
  }

  getHeaderPaths() {
    const allData = [this.aboutContent, this.categoryContent, this.siteContent];
    const paths = [];
    allData.map((item) => {
      paths.push({ title: item.title, slug: item.slug });
    });
    return paths;
  }

  getFooterPaths() {
    return this.footerPaths;
  }
}
