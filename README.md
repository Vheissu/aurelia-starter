# Aurelia Starter
Based off of the official [Aurelia Skeleton Navigation](https://github.com/aurelia/skeleton-navigation) application. If you're like me, you base your Aurelia projects off of the Skeleton Navigation app because it comes with various Gulp tasks, JSPM is configured and it allows you to start building. But all of the dependencies and files you end up removing makes for lost productivity.

This starter takes the Gulp tasks, basic configuration and offers a main.js and app.js/app.html pair. You also get some basic app structure, RESTful API support for rolling your own auth and other basics not found in the starter.

## Structure explained
This starter comes with a predefined structure for your app. It is not strict, just a guide if you are confused where to put everything. All folders and files reside in the ``src`` directory with exception of the ``assets`` folder which lives outside of ``src``.

- **assets/fonts** - Where you put your fonts, of course.
- **assets/images** - Another self-explanatory folder
- **assets/styles** - Where your CSS styles live. This folder can contain both Sass and standard CSS.
- **src/common** - This is where common classes and files live. They are generally shared across your application, plugins, third party vendor scripts and app wide functionality.
- **src/components** - Components can be custom elements, custom attributes or basic classes like base classes
- **src/routes** - This is where your app files live matching routes defined in ``app.js`` the idea is the structure mimics the route structure and URL.
- **src/services** - Services are singletons. They are shared state, so primarily used for storing client-side data like users or perhaps a shopping cart.
