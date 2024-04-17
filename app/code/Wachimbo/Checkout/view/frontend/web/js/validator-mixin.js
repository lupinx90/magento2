/** vat validation method */
define([
    'jquery'
], function ($) {
    'use strict';

    return function (validator) {

        validator.addRule(
            'validate-name',
            function (v) {
                return $.mage.isEmptyNoTrim(v) || v.match(/^[A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s']+$/);
            },
            $.mage.__('Only alphabetic characters and whitespaces allowed')
        );
        validator.addRule(
            'validate-company',
            function (v) {
                return $.mage.isEmptyNoTrim(v) || /^[A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\d\s&.']+$/.test(v);
            },
            $.mage.__('Only alphanumeric characters, whitespaces and ampersand allowed')
        );
        validator.addRule(
            'validate-streetES',
            function (v) {
                return $.mage.isEmptyNoTrim(v) || /^[A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\d\s.\,']+$/.test(v);
            },
            $.mage.__('Only alphanumeric characters, whitespaces and punctuation signs allowed')
        );
        validator.addRule(
            'validate-zipES',
            function (v) {
                return $.mage.isEmptyNoTrim(v) || /^\d{5}$/.test(v);
            },
            $.mage.__('Please enter a valid zip code (Ex: 18110).')
        );
        validator.addRule(
            'validate-phoneES',
            function (v) {
                return $.mage.isEmptyNoTrim(v) || /^\d{9}$/.test(v);
            },
            $.mage.__('Please enter a valid phone number (Ex: 000000000).')
        );
        validator.addRule(
            'validate-nif',
            function (v) {
                var numero, letr, letra;
                var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
    
                var dni = v.toUpperCase();
    
                if(expresion_regular_dni.test(dni) === true){
                    numero = dni.substr(0,dni.length-1);
                    numero = numero.replace('X', 0);
                    numero = numero.replace('Y', 1);
                    numero = numero.replace('Z', 2);
                    letr = dni.substr(dni.length-1, 1);
                    numero = numero % 23;
                    letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
                    letra = letra.substring(numero, numero+1);
                    if (letra != letr) {
                        //alert('Dni erroneo, la letra del NIF no se corresponde');
                        return false;
                    }else{
                        //alert('Dni correcto');
                        return true;
                    }
                }else{
                    //alert('Dni erroneo, formato no válido');
                    return false;
                }
            },
            $.mage.__('NIF/NIE not valid')
        );

        return validator;
    };
});