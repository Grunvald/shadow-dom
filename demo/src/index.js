import { PseudoVDOM } from 'pseudo-vdom-framework';
import { initialConfig, updatedConfig } from './mocks';

const app = new PseudoVDOM(initialConfig, 'app');

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Переключить конфигурацию';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.left = '150px';
    toggleButton.style.zIndex = '1000';

    document.body.insertBefore(toggleButton, document.body.firstChild);

    let isInitialConfig = true;

    toggleButton.addEventListener('click', () => {
        app.update(isInitialConfig ? updatedConfig : initialConfig);
        isInitialConfig = !isInitialConfig;
    });
});