# PoC: window.confirm custom implementation 

## How to use this repo?

1. Run `yarn install`
2. `yarn start`
3. Open Chrome DevTools console
4. Click on the button
5. See, it's working :dog_dance:

See `index.js:82` to see how it can be used.

If you want to try it by yourself,

1. Open Chrome DevTools
2. Use `window.confirmAsync` and pass your desired message like:

```javascript
window.confirmAsync('bilu teteia').then(result => console.log(result))
```

## Warning

I'm not responsible for bugs on modal closing/class toggling but the basic use case works.

It's just a PoC to validate confirmAsync case :)

