![Obscene Logo](https://raw.githubusercontent.com/unverschaemt/Obscene-UI/gh-pages/res/obscene.png)
**Obscene Stylesheet** is a lightweight styling library built for use with [React.js](https://facebook.github.io/react/).    
It extends inline-styles with automated vendor prefixing, browser states and media queries which you may know from regular CSS.

> Note: Obscene Stylesheet is a core library & former part of [Obscene Layout](http://github.com/obscene/Obscene-Layout) which now remains *only* as a set of layouting components

## About
Inspired by [Cristopher Chedeau (@vjeux)](https://twitter.com/vjeux)'s presentation [CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) with the idea of putting styling completely into javascript, I started building our own library to do so. First I was overwhelmed by how much I can achieve with just plain javascript. Such as media queries and `mouseover`-state was not even a problem. But while I started adding more and more there came a point when it was no longer acceptable (EventListeners everywhere) to go with plain javascript and I had to think of something new.    
This is where I found about [Pete Hunt's Approach](https://github.com/petehunt/jsxstyle) with jsxstyles and I thought it would be create to have some kind of JS to CSS compiler.    


## Roadmap
- [x] automated vendor-prefixing (flexbox included)
- [x] media queries
- [ ] :pseudo-classes such as `:hover`, `:focus`, `:active` or `:checked`
- [ ] nesting
- [ ] extending
- [ ] optional CSS-export
- [ ] user options to keep it flexible
- [ ] merging styles
- [ ] global styles

## Usage
> Warning: Do not use this in production. It is still at its beginning

Install via `npm`. Use `-save` if you'd like to add it to your *package.json*.    
```sh
npm install obscene-stylesheet
```


Now you can *require* it within your code.    
```javascript
var Stylesheet = require('obscene-stylesheet').Stylesheet;
```

### Stylesheet.create(styles *[, options]*)
Use this function to define your styles.    
You don't need to worry about vendor prefixing. Obscene-Stylesheet adds exactly those needed. 
This is much like you would define a stylesheet in [React Native](https://facebook.github.io/react-native/) too. e.g.    

> Note: We will add a detailed guide on how to use our media queries since they differ a bit of what you might know from CSS.

```javascript
var styles = Stylesheet.create({
	header : {
		color: '#fff',
		padding: 20,
		fontSize : 12,
		color: 'black',
		fontSize: 20
	},
	box : {
		boxSizing: 'border-box',
		backgroundColor : 'blue'
	}
});
``` 

### Knowledge Source
Information according the need of vendor prefixes were taken from [Richard Bradshaw's Guide](http://css3.bradshawenterprises.com/which-vendor-prefixes-are-needed/) and [CanIUse](http://caniuse.com/).    
For further information about Flexbox check [Flexbox.md](Flexbox.md).    
This implementation is based on [Flexy Boxes](http://the-echoplex.net/flexyboxes/) according browser support and vendor prefixes.      
Default values were taken from [Guide to Flexbox  (css-tricks.com)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).    
It automatically transforms properties to older specs properties such as `msFlexAlign` or `display: -webkit-box` if needed.

> **Warning**: If you've never used flexbox before please be sure to check both links above to properly understand it.

## Repositories
* [[React] Obscene Layout (set of useful layout components)](https://github.com/unverschaemt/Obscene)
* [[React] Obscene (full-featured, responsive UI library)](https://github.com/unverschaemt/Obscene)
* [[Sass] Obscene UI (Template for custom app themes)](http://unverschaemt.github.io/Obscene-UI)
* [[Sass] Obscene Core (layouting & uselful classes / mixins based on flexbox)](https://github.com/unverschaemt/Obscene-Core)

## License
Obscene including all repositories listed above is licensed under the [MIT License](http://opensource.org/licenses/MIT).    
Created with &hearts; by [@rofrischmann](http://rofrischmann.de) at [Unverschämt](http://unverschaemt.net).

## Contributing
Feel free to contribute.
