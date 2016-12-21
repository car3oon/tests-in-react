import { configure } from '@kadira/storybook';
import '../src/stories/stories.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
