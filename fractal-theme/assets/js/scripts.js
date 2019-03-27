import colorConverter from './src/colors';
import changeLog from './src/changelog';
import linkPrettifier from './src/navigation';

const modules = [
  {selector: '.colors', init: colorConverter},
  {selector: '.changelog', init: changeLog},
  {selector: '.Navigation', init: linkPrettifier},
];

modules.forEach((module) => {
  const components = document.querySelectorAll(module.selector);

  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    module.init(component);
  }
});
