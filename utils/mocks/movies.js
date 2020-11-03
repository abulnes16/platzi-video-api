const moviesMocks = [
  {
    id: 'e8d24e48-e43d-4597-9218-a5d9a60cb1f8',
    title: 'That Forsyte Woman',
    year: 1999,
    cover: 'http://dummyimage.com/148x144.jpg/cc0000/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 2054,
    contentRating: 'PG-13',
    source: 'http://slashdot.org/nulla/ut/erat.aspx',
    tags: [
      'Crime|Drama|Film-Noir',
      'Drama',
      'Action|Adventure|Sci-Fi',
      'Action|Drama|War',
      'Drama',
    ],
  },
  {
    id: 'e68260d6-aa88-440b-bd0a-3c5bd7f47dc8',
    title: 'Dance Flick',
    year: 1998,
    cover: 'http://dummyimage.com/197x212.jpg/cc0000/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 2053,
    contentRating: 'PG-13',
    source: 'https://csmonitor.com/neque/libero/convallis/eget.json',
    tags: ['Comedy'],
  },
  {
    id: '693adec6-6388-448a-bea6-852419f75613',
    title: 'Bride of the Monster',
    year: 1997,
    cover: 'http://dummyimage.com/213x192.png/ff4444/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 1978,
    contentRating: 'G',
    source: 'https://biglobe.ne.jp/lacus/morbi/quis.png',
    tags: [
      'Drama|Thriller',
      'Horror',
      'Crime|Drama|Mystery|Thriller',
      'Drama|War',
    ],
  },
  {
    id: '5fe256d3-c511-473b-ba58-cbef936f4b54',
    title: 'Something Wicked This Way Comes',
    year: 2008,
    cover: 'http://dummyimage.com/149x154.png/ff4444/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 2011,
    contentRating: 'R',
    source: 'https://forbes.com/eget/tempus/vel/pede/morbi.xml',
    tags: ['Comedy|Fantasy'],
  },
  {
    id: 'e81435fa-d578-4acc-9b1a-b33291d946ce',
    title: 'Trance',
    year: 2001,
    cover: 'http://dummyimage.com/189x167.jpg/dddddd/000000',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1901,
    contentRating: 'R',
    source: 'https://engadget.com/aliquam/convallis/nunc/proin.jsp',
    tags: ['Children|Comedy', 'Drama', 'Comedy|Drama', 'Drama', 'Drama'],
  },
  {
    id: '1ef57ba1-ccfc-4e1e-93b1-879601b295eb',
    title: 'International, The',
    year: 1996,
    cover: 'http://dummyimage.com/241x165.bmp/cc0000/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 1976,
    contentRating: 'R',
    source: 'http://google.cn/lectus.js',
    tags: ['Drama', 'Horror|Sci-Fi', 'Action|Comedy|Horror'],
  },
  {
    id: '56572f8f-fab7-4acd-8893-05a948b912e0',
    title: 'Lie with Me',
    year: 2008,
    cover: 'http://dummyimage.com/123x248.bmp/5fa2dd/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 2002,
    contentRating: 'PG-13',
    source:
      'http://goo.gl/diam/vitae/quam/suspendisse/potenti/nullam/porttitor.aspx',
    tags: ['Comedy', 'Action|Adventure|Thriller|War'],
  },
  {
    id: '00f08c93-3e50-4e73-ab27-cd5b985d94a0',
    title:
      'Zero de conduite (Zero for Conduct) (Zéro de conduite: Jeunes diables au collège)',
    year: 2007,
    cover: 'http://dummyimage.com/238x181.png/dddddd/000000',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1965,
    contentRating: 'PG-13',
    source: 'https://jiathis.com/sapien/cum.xml',
    tags: [
      'Documentary|Musical',
      'Comedy',
      'Drama',
      'Action|Adventure|Comedy|Drama|War',
      'Horror',
    ],
  },
  {
    id: '20caa0df-d9d0-4a8b-9da8-16fe10458da6',
    title: 'JCVD',
    year: 2008,
    cover: 'http://dummyimage.com/213x116.jpg/ff4444/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 1902,
    contentRating: 'PG',
    source:
      'http://mozilla.com/vitae/quam/suspendisse/potenti/nullam/porttitor.jsp',
    tags: ['Horror'],
  },
  {
    id: '7b083cb8-dbd9-4ace-9bda-c6eea8f06dd5',
    title: 'Last Metro, The (Dernier métro, Le)',
    year: 1995,
    cover: 'http://dummyimage.com/156x236.png/cc0000/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 2023,
    contentRating: 'R',
    source: 'https://phpbb.com/sed/accumsan/felis.xml',
    tags: ['Adventure|Children|Comedy', 'Drama|Thriller'],
  },
];

function filteredMoviesMock(tag) {
  return moviesMocks.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMocks);
  }

  async createMovie() {
    return Promise.resolve(moviesMocks[0]);
  }
}

module.exports = { moviesMocks, filteredMoviesMock, MoviesServiceMock };
