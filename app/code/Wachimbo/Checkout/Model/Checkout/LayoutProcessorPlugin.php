<?php
namespace Wachimbo\Checkout\Model\Checkout;
class LayoutProcessorPlugin
{
    public function afterProcess(
        \Magento\Checkout\Block\Checkout\LayoutProcessor $subject,
        array  $jsLayout
    ) {
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['firstname']['validation']['validate-name'] = true;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['lastname']['validation']['validate-name'] = true;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['company']['validation']['validate-company'] = true;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['city']['validation']['validate-name'] = true;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['postcode']['validation']['validate-zipES'] = true;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['telephone']['validation']['validate-phoneES'] = true;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['vat_id']['validation']['validate-nif'] = true;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['street'] =
        [
        'component' => 'Magento_Ui/js/form/components/group',
        'label' => __('Street Address'),
        'required' => true,
        'dataScope' => 'shippingAddress.street',
        'provider' => 'checkoutProvider',
        'sortOrder' => 60,
        'type' => 'group',
        'additionalClasses' => 'street',
        'children' => [
            [
                'component' => 'Magento_Ui/js/form/element/abstract',
                'config' => [
                    'customScope' => 'shippingAddress',
                    'template' => 'ui/form/field',
                    'elementTmpl' => 'ui/form/element/input'
                ],
                'dataScope' => '0',
                'provider' => 'checkoutProvider',
                'validation' => ['required-entry' => true, "min_text_length" => 1, "max_text_length" => 255, "validate-streetES" => true],
            ]
        ]];
        return $jsLayout;
    }
}