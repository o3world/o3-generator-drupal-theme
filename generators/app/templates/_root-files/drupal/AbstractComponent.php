<?php
namespace Drupal\<%= pascalTitle %>;

use Drupal\<%= pascalTitle %>\<%= pascalTitle %>ComponentInterface;

abstract class AbstractComponent implements <%= pascalTitle %>ComponentInterface {

    /**
     * {@inheritdoc}
     */
    public function attachAssets(&$variables, $library) {
        if(isset($library)) {
            $variables['#attached']['library'][] = $library;
        }
    }

    /**
     * {@inheritdoc}
     */
    public abstract function mapFields(&$variables, $paragraph);

}
