<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// register category
function rtmega_block_categories( $block_categories, $editor_context ) {
    ///if ( ! empty( $editor_context->post ) ) {
       $attr = array(
            array(
                'slug'  => 'rt-mega-menu',
                'title' => __( 'RT Mega Menu', 'rt-mega-menu' ),
            )
        );
        $block_categories =  array_merge( $attr, $block_categories );
	   
   //}
    return $block_categories;
}
add_filter( 'block_categories_all', 'rtmega_block_categories', 999999, 2 );

function rtmega_register_blocks() {
	if ( function_exists( 'register_block_type' ) ) {
		register_block_type( RTMEGA_MENU_PL_PATH . 'public/blocks/rt-mega-menu/build' );
	}
}
add_action( 'init', 'rtmega_register_blocks' );
