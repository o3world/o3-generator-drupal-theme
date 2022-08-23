<?php
namespace Drupal\<%= pascalTitle %>;

class <%= pascalTitle %>ServicesCollector {

    function run(&$variables) {
        $variables['#attached']['library'][] = '<%= kebabTitle %>/<%= camelTitle %>';
        foreach (glob(__DIR__ . '/templates/components/*/*.php') as $path) {
            include $path;
            $file_name = substr($path, strrpos($path, '/') + 1);
            $service_name_cap = pathinfo($file_name, PATHINFO_FILENAME);
            $this->buildServiceContainer($service_name_cap);
        }
    }

    protected function buildServiceContainer($service_name_cap) {
        $key = strtolower($service_name_cap);
        $service_class = "Drupal\\<%= kebabTitle %>\\templates\\components\\" . $service_name_cap;

        $services = &drupal_static(__FUNCTION__);

        if (!isset($services[$key])) {
            // function is being called for the first time for a particular $key
            $services[$key] = new $service_class();
        }
        // Subsequent invocations of this function for a particular $key
        // skip the above two code blocks and quickly return the already indexed
        // information.
        return $services[$key];
    }

    function reset() {
        // reset the service container
        drupal_static_reset('buildServiceContainer');
    }

}
