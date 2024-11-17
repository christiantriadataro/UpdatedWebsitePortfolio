const InputExperience = ({description}) => {
    const colorCoded = [
        // pink
        {color: '#E99287', words: [
                'Designed',
                'Created',
                'Transformed',
                'Converted',
                'Collaborated',
                'Utilized',
                'Developed',
                'Added',
                'selecting',
                'compiling',
                'Enhanced',
                'Performed',
                'Uploaded',
                'Built',
                'Demonstrated',
                'Preprocessed'
            ]},
        // orange (terminologies)
        {color: '#FEA55F', words: [
                'UI/UX',
                'website',
                'components',
                'variants',
                'color palette',
                'documentation',
                'functional',
                'components',
                'backend',
                'API',
                'machine learning',



            ]},
        // blue green (technology)
        {color: '#43D9AD', words: [
            'Figma',
                'Swagger API',
                'frontend',
                'supervised',
                'unsupervised',
                ''
            ]},
        // violet adj
        {color: '#C98BDF', words: [
            'visually',
                'intuitive',
                'seemless',

            ]},
        // blue nouns?
        {color: '#3A49A4', words: [
            'interfaces',
            'integration',
                'application',
                'developers'
            ]},
    ]

    const sample = 'Designed UI/UX using Figma to create visually appealing and intuitive interfaces.'
    const sampleWord = ['Designed', 'Figma']

    const words = sample.split(' ');
    // TODO: 1. note all of the words that needed to have a color, list of words must already have the words that needed to have color
    // TODO: 2. modify the code into the object and its colors also use a large scale code to iterate in the list of color objects
    return (
        <div
            className="text-[10px] px-5 py-4  rounded-lg border border-[#1E2D3D] bg-[#011221] no-scrollbar overflow-x-auto whitespace-nowrap">
            {description.map(phrase => (
                <>- {phrase}<br/></>)
                )}
            {/*{*/}
            {/*    // search the index of the sampleword*/}
            {/*    words.map((word, index) => {*/}
            {/*        const isHighlighted = sampleWord.includes(word);*/}
            {/*        return (*/}
            {/*            <span key={index} className={`${isHighlighted ? 'text-red-500' : ''}`}>{word}{' '}</span>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </div>
    )
}


export default InputExperience