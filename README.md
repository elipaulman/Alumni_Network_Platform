

# Alumni Network Platform

This is an alumni network platform for the Lower Manhattan Cultural Council, created as part of the JP Morgan Chase Code for Good 2024. We won the hackathon!

## Project Structure

The project is divided into two main parts: the backend and the front-end.

### Backend

The backend is responsible for handling the server-side logic, database interactions, and API routes. It is located in the `backend/` directory.

#### Key Files and Directories

- `models/`: Contains the database models.
  - [`alumni.js`](backend/models/alumni.js)
  - [`opportunity.js`](backend/models/opportunity.js)
  - [`post.js`](backend/models/post.js)
  - [`test.js`](backend/models/test.js)
  - [`user.js`](backend/models/user.js)
- `routes/`: Contains the API routes.
  - [`alumniRoutes.js`](backend/routes/alumniRoutes.js)
  - [`db.js`](backend/routes/db.js)
  - [`dbTest.js`](backend/routes/dbTest.js)
  - [`index.js`](backend/routes/index.js)
- [`server.js`](backend/server.js): The main server file.

### Front-end

The front-end is responsible for the user interface and client-side logic. It is located in the `front-end/` directory.

#### Key Files and Directories

- `public/`: Contains public assets.
  - [`index.html`](front-end/public/index.html)
  - [`manifest.json`](front-end/public/manifest.json)
  - [`robots.txt`](front-end/public/robots.txt)
- `src/`: Contains the source code for the front-end.
  - [`App.css`](front-end/src/App.css)
  - [`App.js`](front-end/src/App.js)
  - `components/`: Contains reusable components.
    - [`CalloutBox.jsx`](front-end/src/components/CalloutBox.jsx)
    - [`Card.jsx`](front-end/src/components/Card.jsx)
    - [`CenteredTitle.jsx`](front-end/src/components/CenteredTitle.jsx)
    - [`DirectoryCard.js`](front-end/src/components/DirectoryCard.js)
    - [`footer.jsx`](front-end/src/components/footer.jsx)
    - [`Navbar.jsx`](front-end/src/components/Navbar.jsx)
  - `pages/`: Contains the different pages of the application.
    - [`About.jsx`](front-end/src/pages/About.jsx)
  - `images/`: Contains image assets.
  - [`index.css`](front-end/src/index.css)
  - [`index.js`](front-end/src/index.js)
- [`tailwind.config.js`](front-end/tailwind.config.js): Tailwind CSS configuration file.

## Installation

To install the dependencies for both the backend and front-end, run the following commands:

```sh
# Install backend dependencies
cd backend
npm install

# Install front-end dependencies
cd ../front-end
npm install