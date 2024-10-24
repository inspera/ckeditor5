/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module special-characters/specialcharactersCustom
 */

import { Plugin } from 'ckeditor5/src/core';

/**
 * A plugin that provides special characters for the "Custom" category.
 *
 * ```ts
 * ClassicEditor
 *   .create( {
 *     plugins: [ ..., SpecialCharacters, specialcharactersCustom ],
 *   } )
 *   .then( ... )
 *   .catch( ... );
 * ```
 */
export default class SpecialCharactersCustom extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'SpecialCharactersCustom';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;
		const numbers = [
			{ character: '0', title: t('0') },
			{ character: '1', title: t('1') },
			{ character: '2', title: t('2') },
			{ character: '3', title: t('3') },
			{ character: '4', title: t('4') },
			{ character: '5', title: t('5') },
			{ character: '6', title: t('6') },
			{ character: '7', title: t('7') },
			{ character: '8', title: t('8') },
			{ character: '9', title: t('9') },
		];

		const textSymbols = [
			{ character: '!', title: t('!') },
			{ character: '&quot;', title: t('"') },
			{ character: '#', title: t('#') },
			{ character: '$', title: t('$') },
			{ character: '%', title: t('%') },
			{ character: '&', title: t('&amp;') },
			{ character: '&apos;', title: t('&apos;') },
			{ character: ':', title: t(':') },
			{ character: ';', title: t(';') },
			{ character: ':', title: t(':') },
			{ character: '?', title: t('?') },
			{ character: '@', title: t('@') },
			{ character: '`', title: t('`') },
			{ character: '_', title: t('_') },
			{ character: '~', title: t('~') },
			{ character: '_', title: t('_') },
			{ character: '‘', title: t('Left quotation mark') },
			{ character: '’', title: t('Right quotation mark') },
			{ character: '“', title: t('Left double quotation mark') },
			{ character: '”', title: t('Right double quotation mark') },
			{ character: '”', title: t('Right double quotation mark') },
			{ character: '–', title: t('En dash') },
			{ character: '—', title: t('Em dash') },
			{ character: '¡', title: t('Inverted exclamation mark') },
			{ character: '¦', title: t('Broken bar') },
			{ character: '§', title: t('Section sign') },
			{ character: '¨', title: t('Diaeresis') },
			{ character: '¬', title: t('Not sign') },
			{ character: '©', title: t('Copyright sign') },
			{ character: '®', title: t('Registered sign') },
			{ character: '¯', title: t('Macron') },
			{ character: 'µ', title: t('Micro sign') },
			{ character: '¶', title: t('Pilcrow sign') },
			{ character: '·', title: t('Middle dot') },
			{ character: '¸', title: t('Cedilla') },
			{ character: '´', title: t('Acute accent') },
			{ character: '´', title: t('Single low-9 quotation mark') },
			{ character: '‛', title: t('Single high-revered-9 quotation mark') },
			{ character: '„', title: t('Double low-9 quotation mark') },
			{ character: '…', title: t('Horizontal ellipsis') },
			{ character: '™', title: t('Trade mark sign') },
			{ character: '►', title: t('Back right-pointing pointer') },
			{ character: '•', title: t('Bullet') },
			{ character: '→', title: t('Rightwards arrow') },
			{ character: '⇒', title: t('Rightwards double arrow') },
			{ character: '♦', title: t('Black diamond suite') },
			{ character: '⇔', title: t('Left right double arrow') },
			{ character: '≈', title: t('Almost equal to') },
		];

		const currencySymbols = [
			{ character: '€', title: t('Euro sign') },
			{ character: '£', title: t('Pound sign') },
			{ character: '¢', title: t('Cent sign') },
			{ character: '¤', title: t('Currency sign') },
			{ character: '¥', title: t('Yen sign') },
		];

		const mathSymbols = [
			{ character: '(', title: t('(') },
			{ character: ')', title: t(')') },
			{ character: '*', title: t('*') },
			{ character: '+', title: t('+') },
			{ character: '-', title: t('-') },
			{ character: '.', title: t('.') },
			{ character: '/', title: t('/') },
			{ character: '<', title: t('<') },
			{ character: '>', title: t('>') },
			{ character: '=', title: t('=') },
			{ character: '°', title: t('Degree sign') },
			{ character: '¹', title: t('Superscript one') },
			{ character: '²', title: t('Superscript two') },
			{ character: '³', title: t('Superscript three') },
			{ character: 'º', title: t('Masculine ordinal indicator') },
			{ character: 'ª', title: t('Feminine ordinal indicator') },
			{ character: '»', title: t('Right-pointing double angle quotation mark') },
			{ character: '¼', title: t('Vulgar fraction one quater') },
			{ character: '½', title: t('Vulgar fraction one half') },
			{ character: '¾', title: t('Vulgar fraction three quater') },
			{ character: '¿', title: t( 'Inverted question mark' ) },
		];

		const alphabets = new Array(52).map((_e, i) => {
			if (i <= 25) return { character: String.fromCharCode(i + 65), title: t(String.fromCharCode(i + 65)) };
			return { character: String.fromCharCode(i + 71), title: t(String.fromCharCode(i + 71)),  };
		});

		const LatinSymbols = 'ÀÁÂÃÄÅÆÇÈÉÊËËÌÍÎÏÐÑÒÓÔÖÕØÙÚÛÛÜÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿŒœŴŶŵŷ'.split('').map((symbol) => ({
			character: symbol, title: t(symbol), 
		}));

		const customSymbols = [
			...numbers,
			...textSymbols,
			...currencySymbols,
			...mathSymbols,
			...alphabets,
			...LatinSymbols,
		]

		editor.plugins.get( 'SpecialCharacters' ).addItems( 'Custom', customSymbols );
	}
}