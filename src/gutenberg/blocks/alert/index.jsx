/**
 * Import CSS
 */
import './style.scss';
import './editor.scss';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';
import metadata from './block.json';
import edit from './edit';
import save from './save';
import transforms from './transforms';
import deprecated from './deprecated';

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Alert', '@@text_domain' ),
    description: __( 'Provide contextual feedback messages for user actions.', '@@text_domain' ),
    icon: getIcon( 'block-alert', true ),
    keywords: [
        __( 'alert', '@@text_domain' ),
        __( 'notification', '@@text_domain' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/alert/',
        customStylesCallback( attributes ) {
            const styles = {
                borderLeftColor: attributes.color,
                '.ghostkit-alert-icon': {
                    fontSize: attributes.iconSize,
                    color: attributes.color,
                },
            };

            if ( attributes.hoverColor ) {
                styles[ '&:hover' ] = {
                    borderLeftColor: attributes.hoverColor,
                    '.ghostkit-alert-icon': {
                        color: attributes.hoverColor,
                    },
                };
            }

            return styles;
        },
        supports: {
            styles: true,
            spacings: true,
            display: true,
            scrollReveal: true,
            customCSS: true,
        },
    },
    example: {
        attributes: {
            color: '#E47F3B',
            ghostkitId: 'example-alert',
            ghostkitClassname: 'ghostkit-custom-example-alert',
            className: 'ghostkit-custom-example-alert',
        },
        innerBlocks: [
            {
                name: 'core/paragraph',
                attributes: {
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.',
                },
            },
        ],
    },
    edit,
    save,
    deprecated,
    transforms,
};
