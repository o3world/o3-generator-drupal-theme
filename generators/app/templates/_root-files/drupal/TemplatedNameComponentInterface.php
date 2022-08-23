<?php
namespace Drupal\<%= pascalTitle %>;

Interface <%= pascalTitle %>ComponentInterface {

    /**
     * Attaches a defined assest library to a component
     *
     * @var &$variables
     * @var $library
     */
    public function attachAssets(&$variables, $library);

    /**
     * Sets the values from the CMS to the variables used in the twig template
     *
     * @var &$variables
     * @var $paragraph
     */
    public function mapFields(&$variables, $paragraph);

}
