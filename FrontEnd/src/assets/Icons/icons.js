// icons.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faSmile } from '@fortawesome/free-solid-svg-icons';
import { faSmile as faSmileRegular } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faCoffee, faSmile, faSmileRegular, faGithub);

export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
