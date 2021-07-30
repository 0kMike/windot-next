interface ILanguageContent {
    [name: string]: string,
}

interface ILanguageFile {
    [index: string]: ILanguageContent
}

const languagePhrases: ILanguageFile = {
    EN: require('../assets/i18n/EN.json'),
    DE: require('../assets/i18n/DE.json'),
};

let usedLanguage = 'EN';

export function setLanguage(language: string): void {
    usedLanguage = language;
}

export function translate(phrase: string): string {
    return languagePhrases[usedLanguage][phrase];
}
