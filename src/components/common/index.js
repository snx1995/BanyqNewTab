import { Button, ButtonGroup } from './button';
import { Modal } from './modal';

const components = {
    Button,
    ButtonGroup,
    Modal
}

function install(vue, options) {
    Object.keys(components).forEach(name => {
        vue.component(name, components[name])
    })
}

export default {
    install
}