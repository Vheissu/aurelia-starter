import {Container} from 'aurelia-framework';

import {Auth} from './common/auth/auth';

export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia Starter';

        config.addPipelineStep('authorize', AuthorizeStep);

        config.map([
            { route: ['home'], moduleId: 'home', title: 'Home', auth: true } }
        ]);

        this.router = router;
    }
}


class AuthorizeStep {
  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.auth)) {
      let isLoggedIn = Container.instance.get(Auth).isLoggedIn();

      if (!isLoggedIn) {
          return next.cancel(new Redirect('home'));
      }
    }

    return next();
  }
}
