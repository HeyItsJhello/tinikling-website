# Tinikling Dance Company Website

The official website for Franklin High School's Tinikling Dance Company - a cultural dance group performing traditional Filipino dances.

## About Tinikling Dance Company

Franklin High School's Tinikling Dance Company is a cultural dance group that specializes in traditional Philippine Folk Dance. Established in 2008, our club continues to share the beauty of Filipino culture through our dance. We take on various performance opportunities, hoping to honor Philippine tradition through our fulfilling and energizing dances. Towards the end of our school year, we host our annual Make A Change that gives all of its proceeds to charities that directly help Filipino communities in crisis.

**Mission:** To share the beauty of Filipino culture through our dance.

**Founded:** August 2008 by Edith Montemayor

**Affiliations:** NCPASA, Kabataan Alliance

## Features

- **Dynamic Single-Page Navigation**: Smooth section transitions with Framer Motion animations
- **Dance Showcase**: Gallery of traditional Filipino dances from Luzon, Visayas, and Mindanao
- **Events Calendar**: Upcoming performances and social events
- **Make A Change**: Annual fundraising event information
- **Officer Profiles**: Current leadership team and past officers
- **Membership Information**: How to join and get involved
- **Performance Bookings**: Contact form for booking inquiries
- **Special Recognition**: Tributes to contributors and supporters
- **Responsive Design**: Mobile-friendly layout that works across all devices
- **Animated UI**: Smooth page transitions and reveal animations

## Tech Stack

- **React 19.2.0**: Modern React with latest features
- **Vite 7.2.4**: Lightning-fast build tool and development server
- **React Router DOM 7.11.0**: Client-side routing
- **Framer Motion 12.23.26**: Animation library for smooth UI transitions
- **ESLint**: Code quality and consistency

## Project Structure

```
tinikling-website/
├── src/
│   ├── components/
│   │   ├── about/          # About Us, membership, and involvement info
│   │   ├── business/       # Performance inquiry forms
│   │   ├── common/         # Reusable UI components (reveal animations)
│   │   ├── dances/         # Dance showcase and cards
│   │   ├── developer/      # Developer information
│   │   ├── events/         # Events, MAC, social events, program modals
│   │   ├── hero/           # Landing hero section
│   │   ├── layout/         # Navbar and footer
│   │   └── officers/       # Officer profiles and grids
│   ├── data/               # Static data files
│   │   ├── dances.js       # Dance information
│   │   ├── events.js       # Event listings
│   │   ├── officers.js     # Current and past officers
│   │   └── members.js      # Member data
│   ├── pages/              # Page components
│   │   ├── home.jsx        # Main home page with section routing
│   │   ├── Dances.jsx      # Dances page
│   │   └── PastPerformances.jsx
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── public/
│   └── assets/             # Images and static files
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tinikling-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks

## Development

### Website Sections

The website uses section-based navigation with these main sections:
- **Welcome** - Hero and club introduction
- **About** - Detailed club information, mission, and affiliations
- **Events** - Performance calendar and Make A Change
- **Dances** - Traditional Filipino dances we perform
- **Officers** - Current leadership team
- **Contact** - Performance booking and social media links
- **Social Events** - Community gatherings and workshops
- **Become a Member** - Membership information
- **Getting Involved** - Volunteer opportunities
- **Officer Positions** - Information about applying for leadership roles

### Updating Content

**Add/Edit Dances:**
Edit [src/data/dances.js](src/data/dances.js)

**Add/Edit Events:**
Update [src/data/events.js](src/data/events.js)

**Update Officers:**
Modify [src/data/officers.js](src/data/officers.js)

**Update Members:**
Edit [src/data/members.js](src/data/members.js)

### Styling

The site uses CSS custom properties (variables) defined in the main stylesheet:
- `--cream`: Background color
- `--red`: Primary brand color
- `--gold`: Secondary brand color
- `--blue`: Accent color
- `--dark`: Text color

## Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment

This static site can be deployed to:
- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**
- Any static hosting service

Simply deploy the contents of the `dist/` directory after building.

## Contact

- **Email:** [frhstinikling@gmail.com](mailto:frhstinikling@gmail.com)
- **Instagram:** [@fhs_tdc](https://www.instagram.com/fhs_tdc/)
- **YouTube:** [@TiniklingDanceCompany](https://www.youtube.com/@TiniklingDanceCompany)
- **Facebook:** [frhstinikling](https://www.facebook.com/frhstinikling/)

## Performance Inquiries

Tinikling Dance Company performs at many community events in the Elk Grove and Sacramento region. If you're interested in having our club perform Tinikling or any other traditional Filipino dance, please contact us via email or social media.

## Contributing

This website is maintained by the Tinikling Dance Company. If you're a member and would like to contribute, please reach out to the current officers.

## License

Private - Maintained by Franklin High School's Tinikling Dance Company

---

**Sharing the beauty of Filipino culture through dance since 2008**
