<h1 align="center">
    <img width="672" alt="image" src="https://github.com/user-attachments/assets/17afd08f-18ce-4902-9ba1-ce7e2e23c856">
</h1>

<div align="center">
	<a href="#overview">Overview</a>
  <span> • </span>
    	<a href="#installation">Installation</a>
  <span> • </span>
    	<a href="#additional-ideas">Additional Ideas</a>
  <span> • </span>
      <a href="#license">License</a>
</div>

<br />

d20 is a React Native and Expo application made as a demo for the mobile development learnathon track at [Blueprint 2025](https://blueprint.hackmit.org).

### File Structure

* `assets/` - All icons and static images are stored in this folder
* `components/` - Stores reusable React components which are not screens
* `pages/` - Stores all of the screens for the application (in this case just one)
* `app.json` - Stores metadata for mobile application
* `package.json` - Tracks dependencies used in application


## Installation

### Node.js

React Native and Expo uses [Node.js](https://nodejs.org/en/download/) as the underlying JavaScript runtime. Install Node.js version 23.8.0 from the official site.

### Running

To run the application, first install dependencies then start it:

```
npm install
npx expo start
```

## Additional Exercises

- **Easy**: Don't play rolling sound effect when there are no dice on the screen.
- **Easy**: Show the expected value of a roll given some set of dice.
- **Easy**: Show the formula of dice in standard notation (e.g. 2d6+1d20).
- **Easy**: Add another screen which allows you to customized settings (e.g. turn sound on/off).
- **Hard**: Animated the dice rolling in 3D.

## License

d20 is licensed under [MIT](./LICENSE). You may use and distribute this source code as long as it follows the guidelines set by the license.
