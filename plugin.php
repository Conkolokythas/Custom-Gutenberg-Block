<?php

/**
* Plugin Name: Kolokythas testimonial
* Author: Kolokythas Konstantinos
* Version: 1.0.0
*/

function loadMyBlockFiles() {
  wp_enqueue_script('custom-testimonial', plugin_dir_url(__FILE__) . 'my-block.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), true);
}

add_action('enqueue_block_editor_assets', 'loadMyBlockFiles');


function add_my_stylesheet()
{
    wp_enqueue_style( 'myCSS', plugins_url( '/style.css', __FILE__ ) );

}

add_action('wp_enqueue_scripts', 'add_my_stylesheet');

function add_my_stylesheet_to_editor() {
     wp_enqueue_style( 'myCSS1', plugins_url( '/index.css', __FILE__ ) );
}

add_action( 'admin_enqueue_scripts', 'add_my_stylesheet_to_editor' );
 ?>
