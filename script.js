const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-link');
const times = document.querySelector('.menu-closebtn');

hamburger.addEventListener('click', () => {
  hamburger.classList.add('active');
  nav.classList.add('active');
});

times.addEventListener('click', () => {
  times.classList.remove('active');
  nav.classList.remove('active');
});


const speakers = [
  {
    name: 'Cameron Falloon',
    profile: 'Founder & Joint CEO',
    image: 'asset/Cam-Falloon-600x700-1.jpg',
    description:
      'Cameron Falloon, founder and joint CEO of Body Fit Training, a fast-growing fitness franchise out of Australia with 200+ (and growing) locations across the globe',
  },
  {
    name: 'Chiang Hock Woon',
    profile: 'Deputy CEO',
    image: 'asset/Chiang-Hock-Woon-600x700a.jpg',
    description:
      'Dr. Chiang Hock Woon holds the dual role of Deputy Chief Executive Officer and Chief Data Officer at Sport Singapore',
  },
  {
    name: 'Kenny Sia',
    profile: 'Founder',
    image: 'asset/Kenny-Sia-600x700-1.jpg',
    description:
      'Kenny Sia is the Founder/Director of Level Up Fitness, a 24-hour fitness chain founded in Borneo, East Malaysia',
  },
  {
    name: 'Bianca Stringuini',
    profile: 'Head, People Experience & Culture',
    image: 'asset/Bianca-Stringuini-600x700-1.png',
    description:
      'A certified facilitator in cultural awareness, change management and cultural transformation',
  },
  {
    name: 'Teo Ser Luck',
    profile: 'Entrepreneur and Investor',
    image: 'asset/Teo-Ser-Luck-600x700a.jpg',
    description:
      'Mr Teo was recognised as a young global leader by the World Economic Forum',
  },
  {
    name: 'Minister Edwin Tong',
    profile: 'Minister for Culture, Community and Youth & Second Minister for Law',
    image: 'asset/Minister-Edwin.jpg',
    description:
      ' Mr Tong was also appointed as Deputy Chairman of the People Association (PA) in May 2021. ',
  },
];

speakers.forEach((element) => {
  const speakers = document.querySelector('.grid');
  const speaker = document.createElement('div');
  speaker.innerHTML = `
    <div class="parent">
    <div class="image-con">
      <img src="asset/chess.png" class="dev-bg-tiles" alt="chess" />
      <img src="${element.image}" alt="" class="developer-image" />
      </div>
    <div id="developer-info">
      <h3 class="developer-name">${element.name}</h3>
      <p class="developer-followers">${element.profile}</p>
      <p class="developer-details">
        ${element.description}
      </p>
    </div>
  </div>`;

  speakers.appendChild(speaker);
  speaker.classList.add('developer');
});
