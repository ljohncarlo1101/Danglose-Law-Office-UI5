import fioriTools, { rules } from '@sap-ux/eslint-plugin-fiori-tools';

export default [
    ...fioriTools.configs.recommended
{
    rules: {
        "no-console": "off"
    }
}
];
