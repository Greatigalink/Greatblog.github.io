import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

import 'highlight.js/styles/atom-one-dark.css'

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

export default hljs;
