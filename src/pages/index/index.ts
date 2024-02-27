import Component from '@/base/component';
import Example from '@/components/ui/example/example';

// Набор всех компонентов, для которых будет применяться стандартная инициализация
const allComponents: Record<string, any & Component<HTMLElement>> = {
    example: Example,
};

const initIndexPage = () => {
    // Стандартная инициализация компонентов
    const existedComponents = Array.from(document.querySelectorAll<HTMLElement>('[data-component]'));

    existedComponents.map((component) => {
        try {
            return new allComponents[component.dataset.component!]({
                name: component.dataset.component,
                component: component,
            });
        } catch (e: any) {
            console.error(`Ошибка во время инициализации компонента: ${component.dataset.component}\n\n${e}`);
        }
    });

    // Дополнительная логика для инициализации страницы
    // ...
}

export default initIndexPage;
