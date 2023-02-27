// Code used to require the packages from github//
import { franc, francAll } from 'franc';
import langs from 'langs';

// code to guess languages//
const input = process.argv[2];

const langCode = franc(input);
if (langCode === 'und') {
    console.log("Sorry, couldn't figure it out. Please try again with more sample text!");
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`);
};
