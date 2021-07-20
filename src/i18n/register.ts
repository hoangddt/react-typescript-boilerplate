import {registerLanguage} from './LanguageRegister';
import langEN from './lang/en.lang.json';
import langVI from './lang/vi.lang.json';

registerLanguage('en', langEN);
registerLanguage('vi', langVI);

export {};
