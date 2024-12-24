/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // fontSize: {
        //     "headline": "var(--headline)",
        //     "subheadline": "var(--subheadline)",
        //     "headline-lg": "var(--headline-lg)",
        //     "subheadline-lg": "var(--subheadline-lg)",
        //     "body-text-lg": "var(--body-text-lg)",
        //     "label-lg": "var(--label-lg)",
        //     "code-snippet-lg": "var(--code-snippet-lg)",
        //
        //     "headline-md": "var(--headline-md)",
        //     "subheadline-md": "var(--subheadline-md)",
        //     "code-snippet-md": "var(--code-snippet-md)",
        // },
        extend: {
            height: {
                'header': 'var(--header-size)",'
            },
            colors: {
                "primary-black": "var(--primary-black)",
                "primary-blue": "var(--primary-blue)",
                "primary-dark-blue": "var(--primary-dark-blue)",

                "secondary-blue": "var(--secondary-blue)",
                "secondary-blue-green": "var(--secondary-blue-green)",
                "secondary-blue-violet": "var(--secondary-blue-violet)",
                "secondary-white": "var(--secondary-white)",

                "accent-orange": "var(--accent-orange)",
                "accent-green": "var(--accent-green)",
                "accent-red": "var(--accent-red)",
                "accent-pink": "var(--accent-pink)",

                "lines": "var(--lines)",
                "gradient-blue": "var(--gradient-blue)",
                "gradient-green": "var(--gradient-green)",
                "background": "var(--background-color)",
            },
        },
    },
    plugins: [],
}